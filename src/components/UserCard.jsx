import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container, Stack } from '@mui/material';
import EditForm from '../components/EditForm'

import DeleteConfirmation from './DeleteConfirmation';
import { Box } from '@mui/material';
import UserDetails from '../components/UserDetails'


export default function RecipeReviewCard(userData) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(userData.user.name)

  return (
    <Box paddingTop={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe" />
          }
          title={userData.user.name} 
          subheader={userData.user.profile? userData.user.profile: 'Sin Perfil Asignado' }
        />
        <CardContent>
          <Container>
            <Typography color="text.secondary" variant='body2'  >
              <b>Télefono Móvil</b>
            </Typography>
            <Typography variant='body2' >
              {userData.user.phone}
            </Typography>
            <Typography color="text.secondary" variant='body2' paddingTop={1} >
              <b>Email</b>
            </Typography>
            <Typography variant='body2' >
              {userData.user.email}
            </Typography>
          </Container>

          <Stack marginTop={3} direction="row" justifyContent={'space-between'} >
            <Stack direction="row" spacing={1} >

            <EditForm />

            <DeleteConfirmation />
            </Stack>

            <UserDetails />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
