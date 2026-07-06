import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <h1>Welcome to My React App</h1>
      <p>This is a simple React app.</p>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
