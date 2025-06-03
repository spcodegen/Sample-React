import React, { createContext, useState } from 'react'
import Comp2 from './Comp2';


export const UserApp = createContext();

function Comp1() {

    const [username,setUserName] = useState("Guest");

  return (
    <div className='box1'>
        <UserApp.Provider value={username}>
        <h1>Parent</h1>
        <p>Welcome {username === "" ? "Guest" : username}</p>
        <input type="text" onChange={(e)=>{
            setUserName(e.target.value);
        }}/>
        <Comp2 user ={username}/>
        </UserApp.Provider>
    </div>
  )
}

export default Comp1