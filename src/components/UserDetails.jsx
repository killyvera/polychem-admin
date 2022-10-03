import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

import { UsersContext } from '../contexts/UsersContext'
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

function searchAttr(attr, userData) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].Name === attr) {
        return userData[i].Value;
      }
    }
  }

export default function UserDetails({ userData }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [user, setUser] = useState({})

    useEffect(() => {
        async function fectchData() {
            getUser(userData.user.id).then(data => setUser(data.UserAttributes))
        }
        if (open) {
            fectchData()
        }
    }, [open])

    const handleOpen = () => {
        setOpen(true)
        setName(userData.user.name)
        setId(userData.user.id)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const userDetails = [
        { name: user ? searchAttr('name', user) : 'Asignar Nombre' },
        { phone: user ? searchAttr('phone_number', user) : 'Asignar Número Telefonico' },
        { email: user ? searchAttr('email', user) : 'Asignar Email' },
        { perfil: user ? searchAttr('profile', user) : 'Asignar Perfil' },
        { puesto: user ? searchAttr('custom:puesto', user) : 'Asignar Puesto' },
        { departamento: user ? searchAttr('custom:departamento', user) : 'Asignar Departamento' },
        { picture: user ? searchAttr('picture', user) : '' },
      ]

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleOpen}>
                Detalles
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
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
                        <Box style={{ display:'flex', justifyContent:'center', marginBottom:'15px' }} >
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe" src={userDetails[6].picture} />
                        </Box>
                    </Box>
                                <Typography> <b>Nombre: </b>{userDetails[0].name}</Typography>
                                <Typography> <b>Perfil: </b>{userDetails[3].perfil}</Typography>
                                <Typography> <b>Cargo: </b>{userDetails[4].puesto}</Typography>
                                <Typography> <b>Departamento: </b>{userDetails[5].departamento}</Typography>
                                <Typography> <b>Número Móvil: </b>{userDetails[1].phone}</Typography>
                                <Typography> <b>Email: </b>{userDetails[2].email}</Typography>
                        <Stack>
                            <Button style={{ marginTop: '10px' }} onClick={handleClose} variant='contained' type="submit">Cerrar</Button>
                        </Stack>
                </Box>
            </Modal>
        </div>
    );
}
//{user[0]?.Value?  user[0]?.Value :'Loading...'}
//<Typography id="modal-modal-title" variant="h6" component="h2">
//<Typography id="modal-modal-description" sx={{ mt: 1 }}>