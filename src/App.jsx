import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter
      initialValue = {1}
      step = {2}
      />
    </>
  )
}

export default App