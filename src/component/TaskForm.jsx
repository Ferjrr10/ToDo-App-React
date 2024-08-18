import { useSelector } from "react-redux"
import "./taskform.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../feature/tasks/taskSlice"
import {v4 as uuid} from 'uuid'

export default function TaskForm () {
    
    const [task, setTask] = useState({
        title:'',
        description:''
    })

    const dispatch = useDispatch()

    const handleChange = (event) => {
        
        setTask({
            ...task,
            [event.target.name]: event.target.value,
    })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(addTask({
            ...task,
            id: uuid(),}))
        console.log(task)
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="title" onChange={handleChange}/>
            <textarea name="description" placeholder="description" id="" onChange={handleChange}></textarea>
            <button className="btn-save">guardar</button>
        </form>
    )
}