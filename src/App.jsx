import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux' 
import TaskForm from './component/TaskForm'
import TasksList from './component/TasksList'

function App() {
    

  return (
    <>
      <div className='app1'>
        <h1>TO-DO App</h1>
        <TaskForm/>
        <TasksList/>
        </div>    
    </>
  )
}

export default App
