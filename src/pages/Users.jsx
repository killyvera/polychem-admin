import React from 'react'
import { Authenticator, Button } from '@aws-amplify/ui-react'

export const Users = ({ signOut, user }) => {
  return (
    <Authenticator>
      <div style={{ backGroundColor: 'red' }} >Welcome {user.attributes.email}</div>
      <Button onClick={signOut} >SignOut</Button>
    </Authenticator>
  )
}
