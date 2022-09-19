import React, { useContext} from 'react'
import { UsersContext } from '../contexts/UsersContext'
import { Button } from '@aws-amplify/ui-react'

export const ProductList = () => {
    const { users } = useContext(UsersContext)
    console.log(users)

  return(
    <div>
        <div style={{display:'flex',justifyContent: 'space-between'}}>
        <div>Nombre</div>
        <div>Em@il</div>
        </div>
        {users.map((user,index)=>(
            <div key={index} style={{display:'flex',justifyContent: 'space-between'}} >
                <div style={{display: 'flex', padding:'70px'}} >
                    <h4>David Vera Garcia</h4>
                <h4>{user.Attributes[0].Value}</h4>
                </div>
                <Button>Delete</Button>
            </div>
        ))}
    </div>
  )
}
