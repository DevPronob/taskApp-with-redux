import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITypes } from "./../../../types/taskTypes";
import type { RootState } from "@/redux/store";

interface IinitialState {
  task: ITypes[];
  filter: "all" | "high" | "low" | "medium";
}
type DraftTask = Pick<ITypes, "title" | "description" | "dueDate" | "priority">;
const initialState: IinitialState = {
  task: [
    {
      id: "promjknfffjrf",
      title: "Task1",
      description: "huwfgigf3ifgiwqwgfqwgf9gwqgwq",
      dueDate: "12-4-2013",
      isCompleted: true,
      priority: "low",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData: ITypes = {
        ...action.payload,
        id: Math.random() * 1000 + 1,
        isCompleted: false,
      };

      state.task.push(taskData);
    },
    deleteTask: (state, action) => {
     state.task= state.task.filter((task) => task.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      state.task = state.task.map((task: ITypes) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    },
    updateFilter:(state,action:PayloadAction<'all'|'low'|'medium'|'high'>) =>{
        state.filter =action.payload
    }
  },
});

export const selectTask = (state: RootState) => {
//   return state.tasks.task.filter((task) =>task.priority===state.tasks.filter)
if(state.tasks.filter ==='high'){
    return state.tasks.task.filter((task) =>task.priority==='high')
}
else if(state.tasks.filter ==='low'){
    return state.tasks.task.filter((task) =>task.priority==='low')
}
else if(state.tasks.filter ==='medium'){
    return state.tasks.task.filter((task) =>task.priority==='medium')
}else{
    return state.tasks.task
}
};

export const { addTask, toggleCompleted,updateFilter } = taskSlice.actions;

export default taskSlice.reducer;
