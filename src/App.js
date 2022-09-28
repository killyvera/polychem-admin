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
            <Box>
                <NavBar user={user} signOut={signOut} />

            
                    <UserPage />
            </Box>
        </UsersContextProvider>
    );
}
export default withAuthenticator(App);
