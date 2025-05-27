import { useEffect, useState, useRef } from 'react'
import './App.css'

const items = ["item 1","item 2","item 3","item 4","item 5","item 6"]

function App() {

  return (
    <>
    <ul>
      {items.map((item) =>{
        return (<li key={item}>from map method step 1 {item}</li>)
      })}

      {items.map((item) => (
        <li key={item}>from map method step 2 {item}</li>
      ))}
    </ul>
    </>
  )

}

export default App
