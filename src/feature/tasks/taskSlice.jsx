import {createSlice} from '@reduxjs/toolkit'


const initialState = [
    {
       id:"1",
       title:"Task 1",
       description:"task 1 description",
       completed: false

    },
    {
        id:"2",
        title:"Task 2",
        description:"task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
         console.log(state,action)
         state.push(action.payload)
        // [...state, action.payload]
        }

    }
})

export default taskSlice.reducer

export const {addTask} = taskSlice.actions