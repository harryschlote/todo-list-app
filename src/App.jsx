import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CssBaseline/>
      <TodoList/>
    </>
  )
}

export default App
