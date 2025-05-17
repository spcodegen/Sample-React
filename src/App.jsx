import { useEffect, useState } from 'react'
import './App.css'

function App() {

  function calSum(...res) {
    let total = 0;
    res.forEach(element => {
      total += element;
    });
    return total;
  }

  function myBio(name, city,...res) {
    console.log(name,city,res);
  }

  console.log(calSum(100, 27, 50, 40, 63, 80, 100));
  myBio("sandeep","kandy","a","b","c","d");

  return (
    <>

    </>
  )
}

export default App
