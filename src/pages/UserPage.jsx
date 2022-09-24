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

export default function UserPage() {
  const { users, user, setUser } = useContext(UsersContext)
  //giveMeUser('4cf7cc9e-6cea-4b06-bf8e-7c78729092ff')
  async function getData(Id) {
    const res = await getUser(Id);
    const data = await res;
    setUser(await data.UserAttributes)
    console.log(res);
    console.log(data.UserAttributes);
    console.log(user);
  }
  //usersList().then(data => setUsers(data))
  const rows = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.name = user.Attributes[0] ? user.Attributes[0].Value : '';
    userdata.email = user.Attributes[1] ? user.Attributes[1].Value : '';
    return userdata
  })
console.log(users)
  return (

    <Container style={{ height: '70vh', width: '100%', justifyContent:'center',paddingTop:'4vh' }}>
      <Toolbar style={{ justifyContent: 'space-between'}} >
        <Typography variant='h5' >Usuarios</Typography>
        <DialogForm />
      </Toolbar>
      {users.map((user,index) =>
      <div key={index} >
        <p>{user.Attributes[0].Value}</p>
      <DeleteConfirmation userData={[user.Username,user.Attributes[0].Value]} />
      <UserDetails name={user.Attributes[0].Value} />
      </div>
      )}
    </Container>
  );
};
