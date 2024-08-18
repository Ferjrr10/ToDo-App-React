

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../feature/tasks/taskSlice"
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from "react-router-dom"


export default function TaskForm () {
    
    const [task, setTask] = useState({
        title:'',
        description:''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state=>state.tasks)

    const handleChange = (event) => {
        
        setTask({
            ...task,
            [event.target.name]: event.target.value,
    })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        if (params.id) {
        dispatch(editTask(task))
        } else {
        dispatch(addTask({
            ...task,
            id: uuid(),}))
        }
        navigate('/')
        
    }

    useEffect(()=>{

        if (params.id) {

            setTask(tasks.find(task => task.id === params.id))

        }

    },[params.id, tasks])
    return (
        <form className="bg-zinc-800 max-w-sm p-4 mb-1" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block text-sm font-bold">Task:</label>
            <input className="w-full p-2 rounded-md bg-zinc-600 mb-2" name="title" type="text" placeholder="title" onChange={handleChange} value={task.title}/>
            <label htmlFor="description" className="block text-sm font-bold">Description:</label>
            <textarea className="w-full p-2 rounded-md bg-zinc-600 mb-2" name="description" placeholder="description" id="" onChange={handleChange} value={task.description}></textarea>
            <button className="bg-indigo-600 px-2 py-1 ">guardar</button>
        </form>
    )
}