import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataStore } from "@aws-amplify/datastore";
import { Production } from "../../models";
import { numberToCommas } from "../../utils";

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

const SingleProduction = ({ productionData, toggleModalStatus }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProduction = async () => {
    try {
      setIsLoading(true);
      await DataStore.delete(Production, productionData.id);
      setIsLoading(false);
    } catch (error) {
      console.log("Production Delete Error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <Item>
      <ItemContent>
        <Box flex={1}>
          <Typography component="h6" color="black" fontWeight="bold">
            {productionData.name}
          </Typography>
          <Box marginTop={2} display="flex" gap={3} alignItems="center">
            <Info
              label="Expected Units"
              text={numberToCommas(productionData?.expectedUnits || 0)}
            />
            <Info
              label="Expected Packages"
              text={numberToCommas(productionData?.expectedPackages || 0)}
            />
          </Box>
          <Box display="flex" gap={3} alignItems="center">
            <Info
              label="Expected Pallets"
              text={numberToCommas(productionData?.expectedPallets || 0)}
            />
            <Info
              label="Extra Units"
              text={numberToCommas(productionData?.extraUnits || 0)}
            />
          </Box>
          <Box marginTop={2} display="flex" gap={3} alignItems="center">
            <Info label="Product Name" text={productionData?.Product?.name} />
          </Box>
          {productionData?.notes && (
            <Box marginTop={2} display="flex" gap={3} alignItems="center">
              <Info label="Notes" text={productionData?.notes} />
            </Box>
          )}
        </Box>
        <BtnContainer>
          <Button
            variant="contained"
            onClick={() => toggleModalStatus(true, productionData)}
            disabled={isLoading}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f13737", marginLeft: "1rem" }}
            onClick={handleDeleteProduction}
            disabled={isLoading}
          >
            Delete
          </Button>
        </BtnContainer>
      </ItemContent>
    </Item>
  );
};

export default SingleProduction;
