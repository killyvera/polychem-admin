import React from 'react'
import { Button } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom'


export const DashboardMenu = () => {
  return (
    <div style={style}>
      <Link style={{textDecoration:'blink'}} to='/'>
      <Button isFullWidth={true} style={{ backgroundColor: 'rgb(247 148 29)', marginBottom: '8px' }}>
        Home
        </Button>
        </Link>
      <Link style={{textDecoration:'blink'}} to='/users'>
      <Button isFullWidth={true} style={{ backgroundColor: 'rgb(247 148 29)', marginBottom: '8px' }}>
        Users
      </Button>
      </Link>
    </div>
  )
}

const style = {
  backgroundColor: '#3c2c2c',
  padding: '15px',
  paddingTop: '100px',
  width: '12%',
  display: 'flex',
  flexDirection: 'column'
}
