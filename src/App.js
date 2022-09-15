
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { DashboardMenu } from './components/DashboardMenu';
import {Users} from './pages/Users'

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user)
  return (
    <>
    <DashboardMenu />
    <Users user={user} signOut={signOut} />
    </>
  );
}

export default withAuthenticator(App);

      //<h1>Hello {user.attributes.email}</h1>
      //<button onClick={signOut}>Sign out</button>