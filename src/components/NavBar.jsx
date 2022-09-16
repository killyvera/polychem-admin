import React from 'react'
import { Authenticator, Button } from '@aws-amplify/ui-react'
import Images from '../constants/Images'

export const NavBar = ({ signOut, user }) => {
    return (
        <Authenticator>
            <div style={style}>
                <div style={{marginLeft:'14px'}} >
                    <img style={{ height:'30px' }} src={Images.logo} alt="profile_bg" />
                    <p style={{marginTop:'-4px'}} ><b>Bienvenido, </b>{user.attributes.email}</p>
                </div>
                <Button
                    style={{marginRight: '14px', backgroundColor:'hsl(354deg 73% 43%)' }}
                    onClick={signOut}
                    size='small'
                    variation="primary"
                >SignOut</Button>
            </div>
        </Authenticator>
    )
}

const style = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#f7941d',
    position:'fixed'

}

