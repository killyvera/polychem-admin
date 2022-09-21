import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { UsersContext } from '../contexts/UsersContext'

const columns = [
  { field: "name", headerName: "Name", width: 160 },
  { field: "email", headerName: "Email", width: 210 },
];

export default function UserPage() {
  const { users, popUser, } = useContext(UsersContext)

  const rows = users.map(function(user){
    var userdata ={};
    userdata.id = user.Username;
    userdata.name = '';
    userdata.email='';
    return userdata
  })
 


  console.log(rows)
  return (
<div>Users</div>
  );
};
