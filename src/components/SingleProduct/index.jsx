import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataStore } from "@aws-amplify/datastore";
import Images from "../../constants/Images";
import { Product } from "../../models";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: "white",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F0F8FF",
  marginBottom: theme.spacing(2),
}));

const ItemContent = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  marginLeft: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const BtnContainer = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

const Info = ({ label, text }) => {
  return (
    <Typography component="p" variant="p" color="#1976D2" fontWeight="bold">
      {label}: <span style={{ color: "black" }}>{text}</span>
    </Typography>
  );
};

const SingleProduct = ({ productData, toggleModalStatus }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      setIsLoading(true);
      await DataStore.delete(Product, productData.id);
      setIsLoading(false);
    } catch (error) {
      console.log("Product Delete Error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <Item>
      <Avatar
        alt="Product"
        src={productData?.image || Images.ProductPlaceholder}
        sx={{ width: 56, height: 56 }}
      />
      <ItemContent>
        <Box flex={1}>
          <Typography component="h6" color="black" fontWeight="bold">
            {productData.name}
          </Typography>
          <Typography component="h6" color="black">
            {productData.description}
          </Typography>
          <Box marginTop={2}>
            <Info
              label="Packages Per Pallets"
              text={productData.packagesPerPallets}
            />
            <Info
              label="Units Per Package"
              text={productData.unitsPerPackage}
            />
            <Info label="Code" text={productData.code} />
          </Box>
        </Box>
        <BtnContainer>
          <Button
            variant="contained"
            onClick={() => toggleModalStatus(true, productData)}
            disabled={isLoading}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f13737", marginLeft: "1rem" }}
            onClick={handleDeleteProduct}
            disabled={isLoading}
          >
            Delete
          </Button>
        </BtnContainer>
      </ItemContent>
    </Item>
  );
};

export default SingleProduct;
