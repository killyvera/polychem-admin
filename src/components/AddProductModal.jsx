import React, { useState, useEffect, useCallback } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "aws-amplify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Product } from "../models";

const ModalContent = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  borderRadius: "0.25rem",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  width: 600,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const ImageUploadContainer = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: "#F0F8FF",
  borderRadius: "0.5rem",
}));

const initialProductData = (data) => ({
  productName: data?.name || "",
  description: data?.description || "",
  unitsPerPackage: data?.unitsPerPackage || 0,
  packagesPerPallets: data?.packagesPerPallets || 0,
  productCode: data?.code || "",
  productImage: data?.image || "",
});

const AddImageButton = ({ disabled, handleInputChange }) => {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      disabled={disabled}
    >
      <input
        hidden
        accept="image/*"
        type="file"
        onChange={(ev) => {
          const avatarImage = ev.target.files[0];
          const data = {
            target: { name: "productImage", value: avatarImage },
          };
          handleInputChange(data);
        }}
      />
      <PhotoCamera />
    </IconButton>
  );
};

export default function AddProductModal(props) {
  const { modalStatus, toggleModalStatus } = props;

  const [productData, updateProductData] = useState(initialProductData());
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    updateProductData({ ...productData, [name]: value });
  };

  const updateModalData = useCallback(() => {
    if (!!modalStatus.data) {
      updateProductData(initialProductData(modalStatus.data));
    }
  }, [modalStatus]);

  const handleSaveData = async () => {
    setIsLoading(true);
    try {
      let productId = "";
      if (!!modalStatus.data) {
        productId = modalStatus.data.id;
        const original = await DataStore.query(Product, modalStatus.data.id);
        await DataStore.save(
          Product.copyOf(original, (updated) => {
            updated.name = productData.productName;
            updated.description = productData.description;
            updated.unitsPerPackage = parseInt(productData.unitsPerPackage);
            updated.packagesPerPallets = parseInt(
              productData.packagesPerPallets
            );
            updated.code = productData.productCode;
          })
        );
      } else {
        const newProduct = await DataStore.save(
          new Product({
            name: productData.productName,
            description: productData.description,
            unitsPerPackage: parseInt(productData.unitsPerPackage),
            packagesPerPallets: parseInt(productData.packagesPerPallets),
            code: productData.productCode,
          })
        );
        productId = newProduct.id;
      }
      await Storage.put(`product/${productId}.png`, productData.productImage, {
        contentType: "image/png",
      });
      const productImageLink = await Storage.get(`product/${productId}.png`);
      const original = await DataStore.query(Product, productId);
      await DataStore.save(
        Product.copyOf(original, (updated) => {
          updated.image = productImageLink;
        })
      );
      setIsLoading(false);
      toggleModalStatus(false);
    } catch (error) {
      console.log("Product Save Error: ", error);
      setIsLoading(false);
      toggleModalStatus(false);
    }
  };

  useEffect(() => {
    updateModalData();
  }, [updateModalData]);

  const isUrl = typeof productData.productImage === "string";

  return (
    <Modal open={modalStatus.isOpen}>
      <ModalContent>
        <IconButton
          onClick={() => toggleModalStatus(false)}
          style={{ alignSelf: "flex-end" }}
          disabled={isLoading}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="h5" fontWeight="bold">
          {!!modalStatus.data ? "Edit" : "Add New"} Product
        </Typography>
        <Box marginTop={2}>
          <ImageUploadContainer>
            {productData.productImage ? (
              <Badge
                badgeContent={
                  <AddImageButton
                    disabled={isLoading}
                    handleInputChange={handleInputChange}
                  />
                }
              >
                <Avatar
                  alt="Product"
                  src={
                    isUrl
                      ? productData.productImage
                      : URL.createObjectURL(productData.productImage)
                  }
                  sx={{ width: 72, height: 72 }}
                />
              </Badge>
            ) : (
              <AddImageButton
                disabled={isLoading}
                handleInputChange={handleInputChange}
              />
            )}
          </ImageUploadContainer>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="product-name">Product Name</InputLabel>
            <FilledInput
              id="product-name"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="product-description">
              Product Description
            </InputLabel>
            <FilledInput
              id="product-description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="units-per-package">
              Units Per Package
            </InputLabel>
            <FilledInput
              id="units-per-package"
              value={productData.unitsPerPackage}
              name="unitsPerPackage"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="packages-per-pallets">
              Packages Per Pallets
            </InputLabel>
            <FilledInput
              id="packages-per-pallets"
              value={productData.packagesPerPallets}
              name="packagesPerPallets"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="product-code">Product Code</InputLabel>
            <FilledInput
              id="product-code"
              name="productCode"
              value={productData.productCode}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          disabled={isLoading}
          onClick={handleSaveData}
          style={{ marginTop: "1rem" }}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </ModalContent>
    </Modal>
  );
}
