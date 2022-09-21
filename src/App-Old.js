import {Route, Routes} from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { DashboardMenu } from './components/DashboardMenu';
import {Users} from './pages/Users'
import {Home} from './pages/Home'

import awsExports from './aws-exports';
import { NavBar } from './components/NavBar';
import {UsersContextProvider} from './contexts/UsersContext'

Amplify.configure(awsExports);

function App({ signOut, user }) {

  return (
    <>
    <UsersContextProvider>
    <NavBar user={user} signOut={signOut} />
    <div style={{display:'flex'}}>
    <DashboardMenu />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/users' element={<Users/>} />
    </Routes>
    </div>
    </UsersContextProvider>
    </>
  );
}

export default withAuthenticator(App);

      //<h1>Hello {user.attributes.email}</h1>
      //<button onClick={signOut}>Sign out</button>