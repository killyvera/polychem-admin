import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxContainer = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

export default function Home() {
  const navigate = useNavigate();

  return (
    <BoxContainer>
      <Typography variant="h6" component="h6" textAlign="center">
        Home
      </Typography>
      <Button
        onClick={() => {
          navigate("/products");
        }}
      >
        Add Product and Formula Elements
      </Button>
    </BoxContainer>
  );
}
