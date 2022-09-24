import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import React, { useContext, useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { UsersContext } from '../contexts/UsersContext'
import { Stack } from '@mui/system';

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

export default function EditForm(userIdentity,) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(!open);
    const [user, setUser] = useState([])
    const { giveMeUser, toggle } = useContext(UsersContext)
    console.log(userIdentity.user[1])
   
    const formik = useFormik({
        initialValues: {
            name: '',
            email:'',
            puesto:'',
            departamento:'' 
        },
        onSubmit: values => {
            const email = values.email
            const name = values.name
            const puesto = values.puesto
            const departamento = values.departamento
            //addUser(email, name, puesto, departamento)
            console.log(email, name, puesto, departamento)
            formik.resetForm()
            handleClose()
        },
    });

    return (
        <div>
            <Button variant="contained"  onClick={handleClose} endIcon={<EditIcon />}>
                Editar
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <h1 style={{ paddingTop: '10px' }} >Editar Usuario</h1>
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
                    <form onSubmit={formik.handleSubmit}>
                        <Stack>
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />

                            <label htmlFor="email">Em@il</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                            <label htmlFor="puesto">Puesto</label>
                            <input
                                id="puesto"
                                name="puesto"
                                type="puesto"
                                onChange={formik.handleChange}
                                value={formik.values.puesto}
                            />

                            <label htmlFor="departamento">Departamento</label>
                            <input
                                id="departamento"
                                name="departamento"
                                type="departamento"
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
            </Modal>
        </div>
    );
}