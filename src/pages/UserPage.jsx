import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { UsersContext } from '../contexts/UsersContext'
import { Button, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';

import DialogForm from '../components/DialogForm';
import DeleteConfirmation from '../components/DeleteConfirmation';

export default function UserPage() {
  const { users, giveMeUser, } = useContext(UsersContext)
  //giveMeUser('4cf7cc9e-6cea-4b06-bf8e-7c78729092ff')
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Nombre', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: "action",
      headerName: "Administrar Usuarios",
      sortable: false,
      width: 250,
      renderCell: (params) => {
        const onDelete = (e) => {
          //e.stopPropagation(); // don't select this row after clicking
  
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          return [thisRow.id, thisRow.name]//popUser(thisRow.id)
        };

        const onEdit = (e) => {
          //e.stopPropagation(); // don't select this row after clicking
  
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
              console.log(thisRow)
          return thisRow.id
        };
  
        return <Stack direction="row" spacing={2}>
          <Button variant="contained"endIcon={<EditIcon />}>
            Editar
          </Button>
          <DeleteConfirmation user={onDelete()} />
        </Stack>;
      }
    },
  ];

  const rows = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.name = user.Attributes[0]? user.Attributes[0].Value : '';
    userdata.email = user.Attributes[1]? user.Attributes[1].Value : '';
    return userdata
  })

  console.log(rows)
  return (
    <Container style={{height:'70vh', width:'100%',}}>
      <Toolbar style={{justifyContent: 'space-between'}} >
      <Typography variant='h5' >Usuarios</Typography>
      <DialogForm />
      </Toolbar>
      <DataGrid
        style={{backgroundColor: 'white'}}
        rows={rows}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
      //checkboxSelection
      />
    </Container>
  );
};
