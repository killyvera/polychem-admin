import React, { useContext } from "react";
import { useFormik } from "formik";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open);
  const { addUser } = useContext(AppContext);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      perfil: "",
      puesto: "",
      departamento: "",
    },
    onSubmit: (values) => {
      const email = values.email;
      const phone = values.phone;
      const name = values.name;
      const perfil = values.perfil;
      const puesto = values.puesto;
      const departamento = values.departamento;
      addUser(phone, email, name, perfil, puesto, departamento);
      console.log(phone, email, name, perfil, puesto, departamento);
      formik.resetForm();
      handleClose();
    },
  });

  return (
    <div>
      <Button variant="contained" onClick={handleClose}>
        <PersonAddAlt1Icon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h1 style={{ paddingTop: "10px" }}>Agregar Usuario</h1>
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
          <form onSubmit={formik.handleSubmit}>
            <Stack>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <label htmlFor="phone">Número Móvil</label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />

              <label htmlFor="email">Em@il</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <label htmlFor="perfil">Perfil</label>
              <input
                id="perfil"
                name="perfil"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.perfil}
              />

              <label htmlFor="puesto">Puesto</label>
              <input
                id="puesto"
                name="puesto"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.puesto}
              />

              <label htmlFor="departamento">Departamento</label>
              <input
                id="departamento"
                name="departamento"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.departamento}
              />
            </Stack>
            <Stack>
              <Button
                style={{ marginTop: "10px" }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                onClick={formik.resetForm}
                variant="outlined"
              >
                Reset
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
