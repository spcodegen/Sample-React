import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

function Links() {
  return (
    <div className='links'>
        <MenuItem linktext="Home" linkurl="/"/>
        <MenuItem linktext="About" linkurl="about"/>
        <MenuItem linktext="Contact" linkurl="contact"/>
        <MenuItem linktext="Blog" linkurl="blog"/>
    </div>
  )
}

export default Links