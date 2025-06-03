import React, { useContext } from 'react'
import { UserApp } from './Comp1';

function Comp4() {

const user = useContext(UserApp);

  return (
    <div className='box4'>
        <h4>Childe 03</h4>
        <p>Welcome {user === "" ? "Guest" : user}</p>
    </div>
  )
}

export default Comp4