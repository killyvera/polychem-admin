import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { UsersContext } from '../contexts/UsersContext'
import { Stack } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import { getUser } from '../services/UserServices'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '7px',
  boxShadow: 24,
  p: 4,
};

export default function EditForm({ userData }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(!open);
  const { updateUser } = useContext(UsersContext)
  const [user, setUser] = useState({})

  function searchAttr(attr, userData) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].Name === attr) {
        return userData[i].Value;
      }
    }
  }

  useEffect(() => {
    async function fectchData() {
      getUser(userData.user.id).then(data => setUser(data.UserAttributes))
    }
    if (open) {
      fectchData()
    }
  }, [open])

  const userFormik = [
    { name: user ? searchAttr('name', user) : 'Asignar Nombre' },
    { phone: user ? searchAttr('phone_number', user) : 'Asignar Número Telefonico' },
    { email: user ? searchAttr('email', user) : 'Asignar Email' },
    { perfil: user ? searchAttr('profile', user) : 'Asignar Perfil' },
    { puesto: user ? searchAttr('custom:puesto', user) : 'Asignar Puesto' },
    { departamento: user ? searchAttr('custom:departamento', user) : 'Asignar Departamento' }
  ]
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userFormik[0].name,
      phone: userFormik[1].phone,
      email: userFormik[2].email,
      perfil: userFormik[3].perfil,
      puesto: userFormik[4].puesto,
      departamento: userFormik[5].departamento
    },

    onSubmit: values => {
      const email = values.email
      const phone = values.phone
      const name = values.name
      const perfil = values.perfil
      const puesto = values.puesto
      const departamento = values.departamento
      updateUser(userData.user.id, phone, email, name, perfil, puesto, departamento)
      console.log(phone, email, name, perfil, puesto, departamento)
      formik.resetForm()
      handleClose()
    },
  });

  return (
    <div>
      <IconButton color="primary" onClick={handleClose}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div>
          <Typography id="modal-modal-title" variant="h5">
            Editar Usuario
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          </div  >
          <Box>
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
              <Button style={{ marginTop: '10px' }} variant='contained' type="submit">Submit</Button>
              <Button style={{ marginTop: '10px' }} onClick={formik.resetForm} variant='outlined'>Reset</Button>
            </Stack>
          </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}