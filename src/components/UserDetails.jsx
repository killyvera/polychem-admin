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

export default function DeleteConfirmation(user) {
    const [open, setOpen] =useState(false);
    const [userName, setuserName] = useState('Name Data')
  

    const handleOpen = () => {
        setOpen(true)
        setuserName(user.name)
        };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Detalles
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {userName}
                    </Typography>
                    <Stack>
                        <Button style={{ marginTop: '10px' }} onClick={handleClose} variant='contained' type="submit">Cerrar</Button>

                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}