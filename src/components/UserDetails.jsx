import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

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

export default function DeleteConfirmation(data) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [user, setUser] = useState({})

    useEffect(()=>{
        async function fectchData(){
        getUser(data.data.id).then(data=>setUser(data.UserAttributes))
    }
    if (open){
        fectchData()
    }
    },[open])

    const handleOpen = () => {
        setOpen(true)
        setName(data.data.name)
        setId(data.data.id)
    };
    const handleClose = () => {
        setOpen(false)
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Editar
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {user[0]?.Value?  user[0]?.Value :'Loading...'}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        </Typography>
                        <Stack>
                            <Button style={{ marginTop: '10px' }} onClick={handleClose} variant='contained' type="submit">Cerrar</Button>

                        </Stack>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}