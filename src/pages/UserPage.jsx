import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { UsersContext } from '../contexts/UsersContext'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

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
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={onClick} endIcon={<EditIcon />}>
          Editar
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Borrar
        </Button>
      </Stack>;
    }
  },
];

export default function UserPage() {
  const { users, popUser, } = useContext(UsersContext)

  const rows = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.name = user.Attributes[0].Name === 'name' ? user.Attributes[0].Value : '';
    userdata.email = user.Attributes[1].Name === 'email' ? user.Attributes[1].Value : '';
    return userdata
  })



  console.log(rows)
  return (
    <Box style={{ paddingLeft: 200, margin: 20, height: '70vh', width: '80%', justifySelf: 'center' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      //checkboxSelection
      />
    </Box>
  );
};
