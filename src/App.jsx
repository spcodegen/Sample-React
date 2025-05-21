import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //list of items convert to array using rest operator use(...res)
  //array covert to list of items using spread operator (...a)

  const a = [5,25,88,36,7,69,98,1];

  console.log(Math.min(...a));
  
  return (
    <>

    </>
  )
}

export default App
