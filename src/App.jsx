import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
     <div id='wrapper'>
      <HeaderContent />
      <hr />
      <Outlet />
    </div>
  )
}

export default App
