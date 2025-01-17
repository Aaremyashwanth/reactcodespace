import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestateobject from './components/usestates/Usestateobject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Usestateobject/>
    </>
  )
}

export default App
