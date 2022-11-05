import React, { useState, useContext } from 'react'
import { useFormik } from 'formik';
import formContext from '../contexts/form/formContext';
import { Avatar, Box, Button, Input } from '@mui/material';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';


export const ProductFormulaElement = () => {
    // const { setProductElementFormValues } = useContext(formContext)


    const [avatarPreview, setAvatarPreview] = useState('./assets/user-avatar.jpg')

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            quantity: '',
            avatar: ''
        },
        onSubmit: values => {
            console.log({ values })
            const name = values.name
            const description = values.description
            const quantity = values.quantity
            const image = values.avatar
            // setProductElementFormValues()
            formik.resetForm()
        },
    });
    return (

        <Box

            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius: '7px',
                boxShadow: 24,
                p: 4,
            }}
        >
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <Stack>

                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />

                        <label htmlFor="puesto">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />

                        <label htmlFor="email">Quantity</label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="quantity"
                            onChange={formik.handleChange}
                            value={formik.values.quantity}
                        />

                        <Box
                            display='flex'
                            textAlign='center'
                            justifyContent='center'
                            flexDirection='column'>

                            <Avatar size='md' src={formik.values.avatar !== '' ? formik.values.avatar : avatarPreview} />

                            <Button
                                variant='contained'
                                component='label'
                            >
                                Add Image
                                <Input
                                    name='avatar'
                                    accept='image/*'
                                    id='contained-button-file'
                                    type='file'
                                    hidden
                                    onChange={(e) => {
                                        const fileReader = new FileReader();
                                        fileReader.onload = () => {
                                            if (fileReader.readyState === 2) {
                                                formik.setFieldValue('avatar', fileReader.result);
                                            }
                                        };
                                        fileReader.readAsDataURL(e.target.files[0]);
                                    }}
                                />
                            </Button>
                        </Box>

                        <Button style={{ marginTop: '10px' }} variant='contained' type="submit">Submit</Button>
                        <Button style={{ marginTop: '10px' }} onClick={formik.resetForm} variant='outlined'>Reset</Button>
                    </Stack>
                </form>
            </div>
        </Box>




    );
};