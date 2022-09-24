import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

import { UsersContext } from '../contexts/UsersContext'

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

export default function DeleteConfirmation(userData) {
    const [userId, setUserId] = useState('ID Data')
    const { popUser} = useContext(UsersContext)
    const [open, setOpen] =useState(false);
    const handleOpen = () => {

        setOpen(true)};

    const handleClose = () => {
        setOpen(false)
    };
    const handleDelete = () => {
        //popUser(Data.userData[0])
        setOpen(false)
        
    }
console.log(userData)
    return (
        <div>
            <Button variant="outlined" onClick={handleOpen} startIcon={<DeleteIcon />}>
                Borrar
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Borrar Usuario
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {userData[1]}
                    </Typography>
                    <Stack>
                        <Button style={{ marginTop: '10px' }} onClick={handleDelete} variant='contained' type="submit">Confirmar</Button>
                        <Button style={{ marginTop: '10px' }} onClick={handleClose} variant='outlined'>Cancelar</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}