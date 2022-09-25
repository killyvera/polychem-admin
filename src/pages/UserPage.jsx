import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { UsersContext } from '../contexts/UsersContext'
import { Button, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';

import UserDetails from '../components/UserDetails'
import DialogForm from '../components/DialogForm';
import DeleteConfirmation from '../components/DeleteConfirmation';
import { getUser } from '../services/UserServices'
import UserCard from '../components/UserCard'

export default function UserPage() {
  const { users, user, setUser } = useContext(UsersContext)
  //giveMeUser('4cf7cc9e-6cea-4b06-bf8e-7c78729092ff')

  //usersList().then(data => setUsers(data))
  const actualUsers = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.name = user.Attributes[0] ? user.Attributes[0].Value : '';
    userdata.phone = user.Attributes[1] ? user.Attributes[1].Value : '';
    userdata.email = user.Attributes[2] ? user.Attributes[2].Value : '';
    return userdata
  })
console.log(actualUsers)
  return (

    <Container style={{ height: '70vh', width: '100%', justifyContent:'center',paddingTop:'4vh' }}>
      <Toolbar style={{ justifyContent: 'space-between'}} >
        <Typography variant='h5' >Usuarios</Typography>
        <DialogForm />
      </Toolbar>
      <Stack direction="row" spacing={10} >
      {actualUsers.map((user,index) =>
        <UserCard user={user} key={index} />
      )}
      </Stack>
    </Container>
  );
};
