import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState({});

  const fetchdata = async() => {
    try {
      console.log(import.meta.env.VITE_URL);

      const ans = await axios.get(import.meta.env.VITE_URL + "/users");
      console.log(ans);
      console.log("here 1")
      const response = await axios.get("/users");
      console.log("here 2")
      console.log(response)
      console.log("here 3")
      
      const res = await axios.get("/api/users");
      console.log("here 4")
      console.log(res)

      setdata(response)

    } catch (error) {
      console.log(error)
    }
  }
  fetchdata();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>env variable is here :- {import.meta.env.VITE_MY_VARIABLE}</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
