import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jobs from './Pages/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jobs/>
    </>
  )
}

export default App
