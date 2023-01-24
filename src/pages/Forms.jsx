import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { AppContext } from "../contexts/AppContext";

// Components
import SingleForm from "../components/SingleForm";
import AddFormModal from "../components/AddFormModal";

function Forms() {
  const { formsList } = useContext(AppContext);

  const [modalStatus, setOpen] = useState({ isOpen: false, data: null });

  const toggleModalStatus = (isOpen, data = null) => {
    setOpen({ isOpen, data });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Forms
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={() => toggleModalStatus(true)}>
          Add New Form
        </Button>
      </Box>
      <Box marginTop={2}>
        {formsList.map((form, i) => (
          <SingleForm
            key={`single_form_${i}`}
            formData={form}
            toggleModalStatus={toggleModalStatus}
          />
        ))}
      </Box>
      {modalStatus.isOpen && (
        <AddFormModal
          modalStatus={modalStatus}
          toggleModalStatus={toggleModalStatus}
        />
      )}
    </Box>
  );
}

export default Forms;
