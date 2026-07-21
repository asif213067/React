import { useState, useEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const count2Decrease = () => {
    setCount2(count2 - 1);
  }

  useEffect(() => {
    console.log("Number is changing...")
  }, [count, count2])


  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increase
      </button>

      <h1>{count2}</h1>
      <button
        onClick={count2Decrease}
      >
        Decrease
      </button>
    </div>
  )
}

export default App