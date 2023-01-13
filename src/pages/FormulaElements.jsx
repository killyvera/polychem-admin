import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { AppContext } from "../contexts/AppContext";

// Components
import AddFormulaElementModal from "../components/AddFormulaElementModal";
import SingleFormulaElement from "../components/SingleFormulaElement";

export default function FormulaElements() {
  const { formulaElements } = useContext(AppContext);

  const [modalStatus, setOpen] = useState({ isOpen: false, data: null });

  const toggleModalStatus = (isOpen, data = null) => {
    setOpen({ isOpen, data });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Formula Elements
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={() => toggleModalStatus(true)}>
          Add New Formula Element
        </Button>
      </Box>
      <Box marginTop={2}>
        {formulaElements.map((formulaElement, i) => (
          <SingleFormulaElement
            key={`formula_element_${i}`}
            formulaElementData={formulaElement}
            toggleModalStatus={toggleModalStatus}
          />
        ))}
      </Box>
      {modalStatus.isOpen && (
        <AddFormulaElementModal
          modalStatus={modalStatus}
          toggleModalStatus={toggleModalStatus}
        />
      )}
    </Box>
  );
}
