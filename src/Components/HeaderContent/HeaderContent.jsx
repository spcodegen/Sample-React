import React from 'react'
import './HeaderContent.css'
import logoimage from '../../assets/react.svg';

function HeaderContent() {
  return (
    <div id='navcontent'>
      <img src="vite.svg" alt="Vite Logo" />
      <img src={logoimage} alt="React Logo" />
    </div>
  )
}

export default HeaderContent