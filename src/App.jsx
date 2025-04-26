import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const firstName = "David";
const middleName = " Alan";
const LastName = "  Smith";


  return (
    <>
      <div className="cont">
        <h1>Employee Details</h1>
        <p>Full Name : {firstName} {middleName} {LastName}</p>
      </div>
    </>
  )
}

export default App
