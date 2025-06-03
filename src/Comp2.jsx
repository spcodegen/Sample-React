import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { UserApp } from './Comp1';

function Comp2() {

  const user = useContext(UserApp);

  return (
    <div className='box2'>
        <h2>Childe 01</h2>
        <p>Welcome {user}</p>
        <Comp3 />
    </div>
  )
}

export default Comp2