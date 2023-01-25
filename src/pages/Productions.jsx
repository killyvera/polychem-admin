import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { AppContext } from "../contexts/AppContext";

// Components
import SingleProduction from "../components/SingleProduction";
import AddProductionModal from "../components/AddProductionModal";

function Productions() {
  const { productionsList } = useContext(AppContext);

  const [modalStatus, setOpen] = useState({ isOpen: false, data: null });

  const toggleModalStatus = (isOpen, data = null) => {
    setOpen({ isOpen, data });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Productions
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={() => toggleModalStatus(true)}>
          Add New Production
        </Button>
      </Box>
      <Box marginTop={2}>
        {productionsList.map((production, i) => (
          <SingleProduction
            key={`single_production_${i}`}
            productionData={production}
            toggleModalStatus={toggleModalStatus}
          />
        ))}
      </Box>
      {modalStatus.isOpen && (
        <AddProductionModal
          modalStatus={modalStatus}
          toggleModalStatus={toggleModalStatus}
        />
      )}
    </Box>
  );
}

export default Productions;
