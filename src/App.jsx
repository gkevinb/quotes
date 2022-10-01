import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.scss'
import Card from './components/card/Card'
import quotes from './assets/quotes'
import axios from 'axios'



function App() {
  const [count, setCount] = useState(Math.floor(Math.random() * quotes.length))

  const getData = async () => {
    const res = await axios.get('https://bp6xigidiwkibrlufu6f47kndy0kenjf.lambda-url.eu-central-1.on.aws/');
    console.log(res)
    // return await res.json();
 }

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Card quote={quotes[count].quote} author={quotes[count].author} />
      <button onClick={getData}>Test</button>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
