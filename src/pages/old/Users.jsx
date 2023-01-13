import React from 'react'
import { UsersList } from '../components/UsersList'
import {UserForm} from '../components/UserForm'

export function Users() {

  return (
    <div style={{width: '88%'}} >
    <UserForm/>
    <h1>Lista de Usuarios</h1>
    <UsersList />
    </div>
  )
}
