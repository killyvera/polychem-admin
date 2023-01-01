import React, { useContext } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

import DialogForm from "../components/users/DialogForm";
import UserCard from "../components/users/UserCard";
import { AppContext } from "../contexts/AppContext";

function Users() {
  const { users } = useContext(AppContext);

  return (
    <Box>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Administrar Usuarios</Typography>
          <DialogForm />
        </Stack>
        <Grid
          container
          style={{ justifyContent: "center", paddingTop: "20px" }}
        >
          {users.map((user, index) => (
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

export default Users;
