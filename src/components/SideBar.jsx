import { Box, Button, Toolbar, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/system';
import React from 'react'

export default function Sidebar() {
  return (
    <Box bgcolor={'#ffffff'}
      width={200}
      height={'100%'}
      position={'fixed'}
      sx={{ zIndex: 1 }} >
        <Stack>
        <Divider />
        <Button size="large" startIcon={<HomeIcon />} >Inicio</Button>
        <Divider />
          <Button size="large" startIcon={<PeopleAltIcon />}>Usuarios</Button>
          <Divider />
        </Stack>
    </Box>
  )
}
