import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataStore } from "@aws-amplify/datastore";
import { Form } from "../../models";
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

const booleanToText = (b) => (b ? "Yes" : "No");

const SingleForm = ({ formData, toggleModalStatus }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { users, productionsList } = useContext(AppContext);

  const handleDeleteForm = async () => {
    try {
      setIsLoading(true);
      await DataStore.delete(Form, formData.id);
      setIsLoading(false);
    } catch (error) {
      console.log("Form Delete Error: ", error);
      setIsLoading(false);
    }
  };

  const production = productionsList.find(
    (production) => production.id === formData.formProductionId
  );

  const productionLead = users.find(
    (user) => user.id === formData.leadProduction
  );

  return (
    <Item>
      <ItemContent>
        <Box flex={1}>
          <Typography component="h6" color="black" fontWeight="bold">
            {formData.name}
          </Typography>
          <Typography component="h6" color="black">
            {formData.description}
          </Typography>
          <Box marginTop={2} display="flex" gap={3} alignItems="center">
            <Info label="Planned" text={booleanToText(formData.planned)} />
            <Info
              label="Schedule Date"
              text={new Date(formData.schedule).toLocaleDateString()}
            />
          </Box>
          <Box display="flex" gap={3} alignItems="center">
            <Info label="Expired" text={booleanToText(formData.expire)} />
            <Info
              label="Expiration Date"
              text={new Date(formData.expirationDate).toLocaleDateString()}
            />
          </Box>
          <Box marginTop={2} display="flex" gap={3} alignItems="center">
            <Info label="Sent" text={booleanToText(formData.sent)} />
            <Info label="Active" text={booleanToText(formData.active)} />
          </Box>
          <Box marginTop={2}>
            {formData.updatedAt && (
              <Info
                label="Last Updated At"
                text={new Date(formData.updatedAt).toLocaleDateString()}
              />
            )}
            {production && (
              <Info label="Production Name" text={production.name} />
            )}
          </Box>
          {productionLead && (
            <Box marginTop={2} display="flex" gap={3} alignItems="center">
              <Info label="Lead Production" text={productionLead.name} />
            </Box>
          )}
        </Box>
        <BtnContainer>
          <Button
            variant="contained"
            onClick={() => toggleModalStatus(true, formData)}
            disabled={isLoading}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f13737", marginLeft: "1rem" }}
            onClick={handleDeleteForm}
            disabled={isLoading}
          >
            Delete
          </Button>
        </BtnContainer>
      </ItemContent>
    </Item>
  );
};

export default SingleForm;
