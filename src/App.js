
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { DashboardMenu } from './components/DashboardMenu';
import {Users} from './pages/Users'

import awsExports from './aws-exports';
import { NavBar } from './components/NavBar';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user)
  return (
    <>
    <NavBar user={user} signOut={signOut} />
    <DashboardMenu />
    <Users/>
    </>
  );
}

export default withAuthenticator(App);

      //<h1>Hello {user.attributes.email}</h1>
      //<button onClick={signOut}>Sign out</button>