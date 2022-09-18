import {Route, Routes} from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { DashboardMenu } from './components/DashboardMenu';
import {Users} from './pages/Users'
import {Home} from './pages/Home'

import awsExports from './aws-exports';
import { NavBar } from './components/NavBar';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user)
  
  return (
    <>
    <NavBar user={user} signOut={signOut} />
    <div style={{display:'flex', height: '100vh'}}>
    <DashboardMenu />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/users' element={<Users/>} />
    </Routes>
    </div>
    </>
  );
}

export default withAuthenticator(App);

      //<h1>Hello {user.attributes.email}</h1>
      //<button onClick={signOut}>Sign out</button>