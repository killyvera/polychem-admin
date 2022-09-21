import { AppBar, Typography, Toolbar, Stack, Button, Box } from "@mui/material";
import Image from 'mui-image'
import React from 'react'
import Images from '../constants/Images'

import { Authenticator } from '@aws-amplify/ui-react'

export function NavBar({ signOut, user }) {
    console.log(user)
    return (
        <Authenticator>
            <AppBar position="sticky">
                <Box>
                    <Toolbar sx={{ justifyContent: 'space-between' }} >
                        <Stack
                            spacing={2}
                            direction={'row'} >

                            <Image
                                src={Images.logo}
                                width={'110px'}
                                duration={800} />

                            <Typography
                                pl={7}
                                alignSelf={'center'}
                                sx={{ display: { xs: 'none', sm: 'block' } }} >
                                <b>Bienvenido, </b>
                                {user.attributes.name ?
                                    user.attributes.name :
                                    user.attributes.email ?
                                        user.attributes.email : user.attributes.phone_number}
                            </Typography>
                        </Stack>
                        <Button
                            onClick={signOut}
                            variant="contained">
                            Salir
                        </Button>
                    </Toolbar>
                </Box>
            </AppBar>
        </Authenticator>
    )
}
