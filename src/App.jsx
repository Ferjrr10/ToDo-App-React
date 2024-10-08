import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux' 
import TaskForm from './component/TaskForm'
import TasksList from './component/TasksList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    

  return (
    
      <div className='bg-zinc-900 h-screen text-white'>
        <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList/>}/>
            <Route path='/create-task' element={<TaskForm/>}/>
            <Route path='/edit-task/:id' element={<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
        </div>
       
      </div>    
    
  )
}

export default App
