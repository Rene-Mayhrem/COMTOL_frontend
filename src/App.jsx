import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>Holis estamos escribiendo</h1>
    </>
  )
}

export default App
