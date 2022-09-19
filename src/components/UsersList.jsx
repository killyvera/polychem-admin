import React, { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContext'
import { Button } from '@aws-amplify/ui-react'

export const UsersList = () => {
    const {users, popUser,} = useContext(UsersContext)
        //users.filter((user)=>user.Username !== user.Username)
    return (
        <div>
            <div style={{backgroundColor: '#a4ebca', borderRadius:'5px', margin: '8px'  }}>
                <div style={{display: 'flex', justifyContent: 'space-between', width:'50%'}} >
                <h4 style={{paddingLeft:'25px'}} >Nombre</h4>
                <h4>Email</h4>
                </div>
            </div>
            {users.map((user, index) => (
                <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#f7941d',
                    margin:'8px',
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    borderRadius:'8px'
                    //height: '50px'
                }} >
                    <div style={{ display: 'flex',width: '50%', justifyContent:'space-between', alignItems:'center' }} >
                        <h4>{user.Attributes[0].Name === 'name'? user.Attributes[0].Value : '' }</h4>
                        <h4>{user.Attributes[1].Name === 'email'? user.Attributes[1].Value : '' }</h4>
                    </div>
                    <div style={{padding:'18px'}} >
                    <Button onClick={()=>(popUser(user.Username))} >Borrar Usuario</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}
