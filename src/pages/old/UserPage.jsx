import React, { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { Toolbar, Typography, makeStyles, Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import DialogForm from "../components/DialogForm";
import UserCard from "../components/UserCard";
import Grid from "@mui/material/Grid";
import { Storage } from "aws-amplify";

export default function UserPage() {
  const { users } = useContext(UsersContext);

  const actualUsers = users.map(function (user) {
    var userdata = {};
    userdata.id = user.Username;
    userdata.perfil = user.Attributes[0] ? user.Attributes[0].Value : "";
    userdata.name = user.Attributes[1] ? user.Attributes[1].Value : "";
    userdata.phone = user.Attributes[2] ? user.Attributes[2].Value : "";
    userdata.email = user.Attributes[3] ? user.Attributes[3].Value : "";
    return userdata;
  });

  return (
    <Box style={{ paddingTop: "10vh", maxHeight: "300px" }}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Administrar Usuarios</Typography>
          <DialogForm />
        </Stack>
        <Grid
          container
          style={{ justifyContent: "center", paddingTop: "20px" }}
        >
          {actualUsers.map((user, index) => (
            <Grid
              item
              key={index}
              style={{ minHeight: "auto", minWidth: "300px", margin: "10px" }}
            >
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
