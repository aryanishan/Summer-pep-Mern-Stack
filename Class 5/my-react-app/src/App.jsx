import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <main className="app-shell">
      <h1>Welcome to My React App</h1>

      <section className="counter-row" aria-label="Counter controls">
        <span className="counter-label">Counter</span>
        <span className="counter-value">{count}</span>

        <div className="counter-actions">
          <button
            className="btn"
            type="button"
            onClick={() => setCount(count - 1)}
            aria-label="Decrease counter"
          >
            -
          </button>
          <button
            className="btn btn-reset"
            type="button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => setCount(count + 1)}
            aria-label="Increase counter"
          >
            +
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
