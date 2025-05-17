import { useEffect, useState } from 'react'
import './App.css'

function App() {

const loggedin = true;
const names = [];
const namearraysize = names.length;
  return (
    <>
    {loggedin && <h4>Logged in</h4>}
    {!loggedin && <h4>Logged out</h4>}

    {/* Conditional rendering */}
    {namearraysize >0 && names.map((name)=>{
      return <h4>{name}</h4>
    })}
    {namearraysize == 0 && <h5>Array is Empty</h5>}
    {/* Ternary Operators */}
    {namearraysize >0 ?(names.map((name)=>{
      return <h4>{name}</h4>
    })) :(<h5>Array is Empty</h5>)}
    </>
  )
}

export default App
