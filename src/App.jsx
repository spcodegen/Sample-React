import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaderContent from './Components/HeaderContent/HeaderContent'

function App() {
  return (
    <>
      <div id='wrapper'>
        <HeaderContent />
        <BodyContent>
          <button>Click here</button>
        </BodyContent>
        <BodyContent>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellat itaque saepe eveniet quam cum nostrum voluptate necessitatibus, aliquid neque ratione minima odit expedita, eius velit aut id! Doloremque, omnis.</p>
        </BodyContent>
        <BodyContent />
      </div>
    </>
  )
}

export default App
