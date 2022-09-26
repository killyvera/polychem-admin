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
import Grid from '@mui/material/Grid';

export default function UserPage() {
  const { users, user, setUser } = useContext(UsersContext)
  //giveMeUser('4cf7cc9e-6cea-4b06-bf8e-7c78729092ff')

  //usersList().then(data => setUsers(data))
  const actualUsers = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.perfil = user.Attributes[0] ? user.Attributes[0].Value : '';
    userdata.name = user.Attributes[1] ? user.Attributes[1].Value : '';
    userdata.phone = user.Attributes[2] ? user.Attributes[2].Value : '';
    userdata.email = user.Attributes[3] ? user.Attributes[3].Value : '';
    return userdata
  })
  
  return (

    <Container style={{ height: '70vh', width: '100%', justifyContent:'center',paddingTop:'3vh' }}>
      <Toolbar style={{ justifyContent: 'space-between'}} >
        <Typography variant='h4' >Administrar Usuarios</Typography>
        <DialogForm />
      </Toolbar>
      <Grid container pt={3} >
      {actualUsers.map((user,index) =>
        <UserCard user={user} key={index}/>
      )}
      </Grid>
    </Container>
  );
};
