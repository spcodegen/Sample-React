import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [number, setnumber] = useState(1);
  const [counter, setcounter] = useState(0);
  const [clicks, setclicks] = useState(0);
  const [posts, setposts] = useState([]);

  function handleClick() {
    setnumber(10);
  }

  const decrementFunction = () => {
    setcounter(counter - 1);
  }

  const incrementFunction = () => {
    setcounter(counter + 1);
  }

  const additionFunction = () => {
    setclicks(clicks + 1);
  }

  useEffect(() => {
    document.title = `you clicked ${clicks} times`;
  }, [clicks]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => res.json())
      .then((blogPosts) => setposts(blogPosts));


      console.log("done");
      
  },[]);

  return (
    <div id='wrapper'>
      <button onClick={handleClick}>Click</button>
      <p>{number}</p>
      <hr />
      <h2>Counter</h2>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <br />
      <p>{counter}</p>
      <hr />
      <h4>You Clicked {clicks} times</h4>
      <button onClick={additionFunction}>Click Me</button>
      <hr />
      <ul>
        {posts && posts.map((post) => <li key={post.id} style={{listStyleType:"circle"}}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default App
