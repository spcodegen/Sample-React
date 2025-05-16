import { useState } from 'react'
import './App.css'

function App() {

  const [count, setcount] = useState(0);

  const decrementFunction = () => {
    setcount(count - 1);
  }

  const incrementFunction = () => {
    setcount(count + 1);
  }

  return (
    <div id='wrapper'>
      <h2>Counter</h2>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <br />
      <p>{count}</p>
    </div>
  )
}

export default App
