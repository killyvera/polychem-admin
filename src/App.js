import { Route, Routes } from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Home } from './pages/Home'
import awsExports from './aws-exports';
import { NavBar } from './components/NavBar';
import { UsersContextProvider } from './contexts/UsersContext'
import { Box, Stack } from '@mui/material'
import UserPage from './pages/UserPage';
import { FormsList } from './pages/FormsList';

Amplify.configure(awsExports);

function App({ signOut, user }) {

    return (
        <UsersContextProvider>
            <Box>
                <NavBar user={user} signOut={signOut} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/forms' element={<FormsList />} />
                    <Route path='/users' element={<UserPage user={user} signOut={signOut} />} />
                </Routes>
            </Box>
        </UsersContextProvider>
    );
}
export default withAuthenticator(App);
