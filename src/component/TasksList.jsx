import { useSelector } from "react-redux"


export default function TasksList () {

    
const tasks = useSelector(state=>state.tasks)


console.log(tasks)

    return (
        <div>
            {tasks.map(item=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
)
}