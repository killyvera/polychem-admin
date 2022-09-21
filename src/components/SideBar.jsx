import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
<Box bgcolor={'#333'}
    width={200}
    height={'100%'}
    position={'fixed'}
    sx={{ zIndex: 1 }} >
    <Typography>SideBar</Typography>
</Box>
  )
}
