import React from 'react'
import { Authenticator, Button } from '@aws-amplify/ui-react'
import Images from '../constants/Images'

export const NavBar = ({ signOut, user }) => {
    return (
        <Authenticator>
            <div style={style}>
                <div>
                    <img style={{ height: '30px' }} src={Images.logo} alt="profile_bg" />
                    <p><b>Bienvenido, </b>{user.attributes.email}</p>
                </div>
                <Button
                    style={{marginRight: '14px'}}
                    onClick={signOut}
                    size='small'
                    variation="primary"
                >SignOut</Button>
            </div>
        </Authenticator>
    )
}

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#f7941d'

}

