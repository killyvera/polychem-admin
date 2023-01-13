import React, { useState, useEffect, useCallback } from "react";
import { Storage } from "aws-amplify";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Container, Stack } from "@mui/material";

import EditForm from "./EditForm";
import DeleteConfirmation from "./DeleteConfirmation";
import UserDetails from "./UserDetails";

export default function RecipeReviewCard(userData) {
  const [avatarLink, setAvatarLink] = useState("");

  const getAvatar = useCallback(async () => {
    const id = await userData.user.id;
    const link = await Storage.get(`avatar/${id}.png`);
    setAvatarLink(link);
  }, [userData]);

  useEffect(() => {
    getAvatar();
  }, [getAvatar]);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blue[500] }}
            aria-label="recipe"
            src={userData ? avatarLink : console.log("no user link")}
          />
        }
        title={userData.user.name}
        subheader={
          userData.user.perfil ? userData.user.perfil : "Sin Perfil Asignado"
        }
      />
      <CardContent>
        <Container>
          <Typography color="text.secondary" variant="body2">
            <b>Télefono Móvil</b>
          </Typography>
          <Typography variant="body2">{userData.user.phone}</Typography>
          <Typography color="text.secondary" variant="body2" paddingTop={1}>
            <b>Email</b>
          </Typography>
          <Typography variant="body2">{userData.user.email}</Typography>
        </Container>

        <Stack marginTop={3} direction="row" justifyContent={"space-between"}>
          <Stack direction="row" spacing={1}>
            <EditForm userData={userData} />

            <DeleteConfirmation userData={userData} />
          </Stack>

          <UserDetails userData={userData} />
        </Stack>
      </CardContent>
    </Card>
  );
}
