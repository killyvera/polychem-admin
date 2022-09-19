import React, { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContext'
import { Button } from '@aws-amplify/ui-react'

export const ProductList = () => {
    const { users } = useContext(UsersContext)
    console.log(users)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Nombre</div>
                <div>Em@il</div>
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
                        <h4>David Vera Garcia</h4>
                        <h4>{user.Attributes[0].Value}</h4>
                    </div>
                    <div style={{padding:'18px'}} >
                    <Button>Delete</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}
