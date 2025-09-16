import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: " I am a good todo"
    },
    {
      title: "Hey another todo",
      desc: "I am good todo too"
    },
    {
      title: " Hey I am grocery todo",
      desc: "I am a good todo but i am grocery todo"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //   <div className="m-4 border-b-blue-700 "></div>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>

  //   </>)
  // }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button> showbtn is true</button> : <button>showbtn  is false</button>}


      {/* {showbtn && <button>showbtn is true</button>} */}
      {/* {todos.map(todo => {
        // return <Todo id = {todo.title} todo={todo} />
      */}

      {todos.map(todo => {
  return (
    <div key={todo.title} className="m-4 p-2 border-b-2 border-blue-700">
      <div className="font-bold">{todo.title}</div>
      <div className="text-gray-600">{todo.desc}</div>
    </div>
  )
})}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
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
