import React from 'react'
import { Button } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom'


export const DashboardMenu = () => {
  return (
    <div style={style}>
      <Button style={{ backgroundColor: 'rgb(247 148 29)', marginBottom: '8px' }}>
        <Link style={{textDecoration:'blink'}} to='/'>Home</Link>
      </Button>
      <Button style={{ backgroundColor: 'rgb(247 148 29)', marginBottom: '8px' }}>
        <Link style={{textDecoration:'blink'}} to='/users'>Users</Link>
      </Button>
    </div>
  )
}

const style = {
  backgroundColor: '#3c2c2c',
  padding: '15px',
  paddingTop: '100px',
  width: '17vh',
  display: 'flex',
  flexDirection: 'column'
}
