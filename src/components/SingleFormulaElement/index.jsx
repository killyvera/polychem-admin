import React, { useState, useContext, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "aws-amplify";
import Images from "../../constants/Images";
import { FormulaElement } from "../../models";
import { AppContext } from "../../contexts/AppContext";

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

const SingleFormulaElement = ({ formulaElementData, toggleModalStatus }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formulaElementImg, updateFormulaElementImg] = useState(null);

  const { products } = useContext(AppContext);

  const handleDeleteFormulaElement = async () => {
    try {
      setIsLoading(true);
      await DataStore.delete(FormulaElement, formulaElementData.id);
      setIsLoading(false);
    } catch (error) {
      console.log("FormulaElement Delete Error: ", error);
      setIsLoading(false);
    }
  };

  const productData = products.find(
    (product) => product.id === formulaElementData.productID
  );

  const getFormulaElementAvatar = useCallback(async () => {
    try {
      const productImageLink = await Storage.get(
        `formula-element/${formulaElementData.id}.png`
      );
      updateFormulaElementImg(productImageLink);
    } catch (error) {
      console.log("ERROR FORM DETAIL: ", error);
    }
  }, [formulaElementData]);

  useEffect(() => {
    getFormulaElementAvatar();
  }, [getFormulaElementAvatar]);

  return (
    <Item>
      <Avatar
        alt="FormulaElement"
        src={formulaElementImg || Images.ProductPlaceholder}
        sx={{ width: 56, height: 56 }}
      />
      <ItemContent>
        <Box flex={1}>
          <Typography component="h6" color="black" fontWeight="bold">
            {formulaElementData.name}
          </Typography>
          <Typography component="h6" color="black">
            {formulaElementData.description}
          </Typography>
          <Box marginTop={2}>
            <Info label="Quantity" text={`${formulaElementData.quantity} kg`} />
            <Info label="Product Name" text={productData?.name || ""} />
          </Box>
        </Box>
        <BtnContainer>
          <Button
            variant="contained"
            onClick={() => toggleModalStatus(true, formulaElementData)}
            disabled={isLoading}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f13737", marginLeft: "1rem" }}
            onClick={handleDeleteFormulaElement}
            disabled={isLoading}
          >
            Delete
          </Button>
        </BtnContainer>
      </ItemContent>
    </Item>
  );
};

export default SingleFormulaElement;
