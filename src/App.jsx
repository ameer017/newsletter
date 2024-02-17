import './App.css'
import {Desktop, DesktopS} from '/index'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Desktop} />
        <Route path='/success' Component={DesktopS} />
      </Routes>
    </div>
  )
}

export default App
