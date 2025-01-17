import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestateobject from './components/usestates/Usestateobject'
import UsestateArray from './components/usestates/UsestateArray'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UsestateArray/>
     {/* <Usestateobject/> */}
    </>
  )
}

export default App
