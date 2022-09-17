import React from 'react'
import { createUser } from '../services/UserServices'

export function Users() {
const create = createUser('+525575532258')
console.log(create)
  return (
    <div style={{paddingTop: '100px'}}>user</div>

  )
}
