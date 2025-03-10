import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import PaginaInicial from './components/PaginaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaInicial/>
    </>
  )
}

export default App
