import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { AppContext } from "../../contexts/AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

export default function DeleteConfirmation({ userData }) {
  const { popUser } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    popUser(userData.user.id);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h5">
              Eliminar Usuario
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {userData.user.name}
          </Typography>
          <Stack>
            <Button
              style={{ marginTop: "10px" }}
              onClick={handleDelete}
              variant="outlined"
              type="submit"
            >
              Borrar
            </Button>
            <Button
              style={{ marginTop: "10px" }}
              onClick={handleClose}
              variant="contained"
              type="submit"
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
