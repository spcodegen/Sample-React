import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  const [input, setinput] = useState("SANDEEP");
  const [count, setcount] = useState(0);

  const countref = useRef(0);
  const inputref = useRef();
  const inputref1 = useRef();
  const inputref2 = useRef();

  useEffect(() => {
    // setcount((count) => count + 1);
    countref.current = countref.current + 1;
    inputref.current.style.backgroundColor = "red";
    inputref1.current.style.backgroundColor = "yellow";
    
  })

  const handleChange = (e) => {
    if (e.target.value.length == 0) {
      setinput("<Input Text goes here>")
    } else {
      setinput(e.target.value);
    }
  }

  const handleclick = () => {
    if (inputref2.current.value == "") {
      inputref2.current.focus();
    }else if(inputref2.current.value >50){
      alert("Success");
    }else{
      alert("Danger");
    }
  }

  return (
    <>
      <input type="text" onChange={handleChange} ref={inputref1}/>
      <p>You have input {input}</p>
      <p>Rendered {countref.current}</p>
      <input type="text" ref={inputref}/>

      <br /><br />
      <input type="text" ref={inputref2}/>
      <button onClick={handleclick}>Validate</button>
    </>
  )
}

export default App
