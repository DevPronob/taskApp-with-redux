import { createSlice } from "@reduxjs/toolkit";
import type { ITypes } from './../../../types/taskTypes';
import type { RootState } from "@/redux/store";


interface IinitialState {
    task:ITypes[],
    filter:"all"|"high"|"low"|"medium"
}
const initialState:IinitialState ={
    task:[
        {
        id:"promjknfffjrf",
        name:"Task1",
        description:"huwfgigf3ifgiwqwgfqwgf9gwqgwq",
        dueDate:"12-4-2013",
        isCompleted:true,
        priority:"low"
    }
    ],
    filter:'all'
}
const taskSlice =createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state,action) =>{
            state.task.push(action.payload)
        }
    }
})

export const selectTask =(state:RootState) =>{
    return state.tasks.task
}

export const {addTask}= taskSlice.actions


export default taskSlice.reducer