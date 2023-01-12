import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { AppContext } from "../contexts/AppContext";

// Components
import AddProductModal from "../components/AddProductModal";
import SingleProduct from "../components/SingleProduct";

export default function Products() {
  const { products } = useContext(AppContext);

  const [modalStatus, setOpen] = useState({ isOpen: false, data: null });

  const toggleModalStatus = (isOpen, data = null) => {
    setOpen({ isOpen, data });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Products
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={() => toggleModalStatus(true)}>
          Add New Product
        </Button>
      </Box>
      <Box marginTop={2}>
        {products.map((product, i) => (
          <SingleProduct
            key={`product_${i}`}
            productData={product}
            toggleModalStatus={toggleModalStatus}
          />
        ))}
      </Box>
      {modalStatus.isOpen && (
        <AddProductModal
          modalStatus={modalStatus}
          toggleModalStatus={toggleModalStatus}
        />
      )}
    </Box>
  );
}
