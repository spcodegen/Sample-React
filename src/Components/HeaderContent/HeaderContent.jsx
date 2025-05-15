import React from 'react'
import logo from '../../assets/react.svg'
import Links from '../Links/Links'

function HeaderContent() {
  return (
    <div id='header'>
        <div><img src={logo} alt="" /></div>
        <Links />
    </div>
  )
}

export default HeaderContent