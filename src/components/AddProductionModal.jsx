import React, { useState, useEffect, useCallback, useContext } from "react";
import { DataStore } from "@aws-amplify/datastore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Production } from "../models";
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

const initialProductionData = (data) => ({
  productionName: data?.name || "",
  expectedUnits: data?.expectedUnits || 0,
  expectedPackages: data?.expectedPackages || 0,
  expectedPallets: data?.expectedPallets || 0,
  extraUnits: data?.extraUnits || 0,
  notes: data?.notes || "",
  productionProductId: data?.Production?.id || "",
});

export default function AddProductionModal(props) {
  const { modalStatus, toggleModalStatus } = props;

  const { products } = useContext(AppContext);

  const [productionData, updateProductionData] = useState(
    initialProductionData()
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    updateProductionData({ ...productionData, [name]: value });
  };

  const updateModalData = useCallback(() => {
    if (!!modalStatus.data) {
      updateProductionData(initialProductionData(modalStatus.data));
    }
  }, [modalStatus]);

  const handleSaveData = async () => {
    setIsLoading(true);
    try {
      if (!!modalStatus.data) {
        const original = await DataStore.query(Production, modalStatus.data.id);
        await DataStore.save(
          Production.copyOf(original, (updated) => {
            updated.name = productionData.productionName;
            updated.expectedUnits = parseInt(productionData.expectedUnits);
            updated.expectedPackages = parseInt(
              productionData.expectedPackages
            );
            updated.expectedPallets = parseInt(productionData.expectedPallets);
            updated.extraUnits = parseInt(productionData.extraUnits);
            updated.notes = productionData.notes;
            updated.productionProductId = productionData.productionProductId;
          })
        );
      } else {
        await DataStore.save(
          new Production({
            name: productionData.productionName,
            expectedUnits: parseInt(productionData.expectedUnits),
            expectedPackages: parseInt(productionData.expectedPackages),
            expectedPallets: parseInt(productionData.expectedPallets),
            extraUnits: parseInt(productionData.extraUnits),
            notes: productionData.notes,
            productionProductId: productionData.productionProductId,
          })
        );
      }
      setIsLoading(false);
      toggleModalStatus(false);
    } catch (error) {
      console.log("Production Save Error: ", error);
      setIsLoading(false);
      toggleModalStatus(false);
    }
  };

  useEffect(() => {
    updateModalData();
  }, [updateModalData]);

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
          {!!modalStatus.data ? "Edit" : "Add New"} Production
        </Typography>
        <Box marginTop={2}>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="production-name">Production Name</InputLabel>
            <FilledInput
              id="production-name"
              name="productionName"
              value={productionData.productionName}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="expected-units">Expected Units</InputLabel>
            <FilledInput
              id="expected-units"
              value={productionData.expectedUnits}
              name="expectedUnits"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="expected-packages">
              Expected Packages
            </InputLabel>
            <FilledInput
              id="expected-packages"
              value={productionData.expectedPackages}
              name="expectedPackages"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="expected-pallets">Expected Pallets</InputLabel>
            <FilledInput
              id="expected-pallets"
              value={productionData.expectedPallets}
              name="expectedPallets"
              type="number"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="production-description">Notes</InputLabel>
            <FilledInput
              id="production-notes"
              name="notes"
              value={productionData.notes}
              onChange={handleInputChange}
              multiline
              rows={4}
              disabled={isLoading}
            />
          </FormControl>
          <FormControl fullWidth variant="filled" style={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="productionProductId">Product</InputLabel>
            <Select
              id="production-product-id"
              name="productionProductId"
              value={productionData.productionProductId}
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
