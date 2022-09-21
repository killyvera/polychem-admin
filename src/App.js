import { Route, Routes } from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { DashboardMenu } from './components/DashboardMenu';
import { Users } from './pages/Users'
import { Home } from './pages/Home'

import awsExports from './aws-exports';
import { NavBar } from './components/NavBar';
import { UsersContextProvider } from './contexts/UsersContext'

import { Box, Stack } from '@mui/material'
import SideBar from './components/SideBar';
import UserPage from './pages/UserPage';

Amplify.configure(awsExports);

function App({ signOut, user }) {

    return (
        <UsersContextProvider>
            <Box style={{backgroundColor: '#f5f5f5', height:'100vh'}} >
                <NavBar user={user} signOut={signOut} />
                <Stack direction={'row'} >
                    <SideBar />
                    <UserPage />
                </Stack>
            </Box>
        </UsersContextProvider>
    );
}
export default withAuthenticator(App);
