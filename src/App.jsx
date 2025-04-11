import { useState } from 'react'
import CSoonLogo from './assets/CSoon.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='CustomMargin'>Dzedas is working on it</h1>
      <h3 className='CustomMargin'> sanity meter</h3>
      <button onClick={() => setCount((count) => count + 1)}>
       {count}
      </button>
    </>
  )
}

export default App
