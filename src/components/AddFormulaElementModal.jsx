import React, { useState, useEffect, useCallback, useContext } from "react";
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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { FormulaElement } from "../models";
import { AppContext } from "../contexts/AppContext";

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

const initialFormulaElementData = (data) => ({
  formulaElementName: data?.name || "",
  description: data?.description || "",
  quantity: data?.quantity || 0,
  productID: data?.productID || "",
  formulaElementImage: data?.image || "",
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
            target: { name: "formulaElementImage", value: avatarImage },
          };
          handleInputChange(data);
        }}
      />
      <PhotoCamera />
    </IconButton>
  );
};

export default function AddFormulaElementModal(props) {
  const { modalStatus, toggleModalStatus } = props;

  const { products } = useContext(AppContext);

  const [formulaElementData, updateFormulaElementData] = useState(
    initialFormulaElementData()
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    updateFormulaElementData({ ...formulaElementData, [name]: value });
  };

  const updateModalData = useCallback(() => {
    if (!!modalStatus.data) {
      updateFormulaElementData(initialFormulaElementData(modalStatus.data));
    }
  }, [modalStatus]);

  const handleSaveData = async () => {
    setIsLoading(true);
    try {
      let formulaElementId = "";
      if (!!modalStatus.data) {
        formulaElementId = modalStatus.data.id;
        const original = await DataStore.query(
          FormulaElement,
          modalStatus.data.id
        );
        await DataStore.save(
          FormulaElement.copyOf(original, (updated) => {
            updated.name = formulaElementData.formulaElementName;
            updated.description = formulaElementData.description;
            updated.quantity = formulaElementData.quantity;
            updated.productID = formulaElementData.productID;
          })
        );
      } else {
        const newProduct = await DataStore.save(
          new FormulaElement({
            name: formulaElementData.formulaElementName,
            description: formulaElementData.description,
            quantity: formulaElementData.quantity,
            productID: formulaElementData.productID,
          })
        );
        formulaElementId = newProduct.id;
      }
      await Storage.put(
        `formula-element/${formulaElementId}.png`,
        formulaElementData.formulaElementImage,
        {
          contentType: "image/png",
        }
      );
      const formulaElementImageLink = await Storage.get(
        `formula-element/${formulaElementId}.png`
      );
      const original = await DataStore.query(FormulaElement, formulaElementId);
      await DataStore.save(
        FormulaElement.copyOf(original, (updated) => {
          updated.image = formulaElementImageLink;
        })
      );
      setIsLoading(false);
      toggleModalStatus(false);
    } catch (error) {
      console.log("Formula Element Save Error: ", error);
      setIsLoading(false);
      toggleModalStatus(false);
    }
  };

  useEffect(() => {
    updateModalData();
  }, [updateModalData]);

  const isUrl = typeof formulaElementData.formulaElementImage === "string";

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
          {!!modalStatus.data ? "Edit" : "Add New"} Formula Element
        </Typography>
        <Box marginTop={2}>
          <ImageUploadContainer>
            {formulaElementData.formulaElementImage ? (
              <Badge
                badgeContent={
                  <AddImageButton
                    disabled={isLoading}
                    handleInputChange={handleInputChange}
                  />
                }
              >
                <Avatar
                  alt="Formula Element"
                  src={
                    isUrl
                      ? formulaElementData.formulaElementImage
                      : URL.createObjectURL(
                          formulaElementData.formulaElementImage
                        )
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
            <InputLabel htmlFor="formula-element-name">
              Formula Element Name
            </InputLabel>
            <FilledInput
              id="formula-element-name"
              name="formulaElementName"
              value={formulaElementData.formulaElementName}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="formula-element-description">
              Formula Element Description
            </InputLabel>
            <FilledInput
              id="formula-element-description"
              name="description"
              value={formulaElementData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <FilledInput
              id="quantity"
              value={formulaElementData.quantity}
              name="quantity"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="productID">Product</InputLabel>
            <Select
              id="formula-element-product-id"
              name="productID"
              value={formulaElementData.productID}
              onChange={handleInputChange}
            >
              {products.map((product, i) => (
                <MenuItem key={`product_${i}`} value={product.id}>
                  {product.name}
                </MenuItem>
              ))}
            </Select>
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
