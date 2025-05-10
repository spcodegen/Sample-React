import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'

function App() {

  function hello01() {
    console.log("Hello 01");
  }

  //Arrow Function
  const hello02 = () => {
    console.log("Hello 02");
  }

  const hello03 = (name) => {
    console.log("Hello 03 " + name);
  }

  return (
    <>
      <div id='wrapper'>
        <HeaderContent />
        <button onClick={hello01} >Click 01</button>
        <button onClick={hello02} >Click 02</button>
        <button onClick={() => { hello03("sandeep"); }} >Click 03</button>
      </div>
    </>
  )
}

export default App
