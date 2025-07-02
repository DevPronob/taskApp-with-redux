import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
 type IUser ={
    id:number,
    name:string
 }
interface IinitialState {
  user: IUser[];
}
const initialState: IinitialState = {
  user: [
    {
      id: 100001,
      name:"pronob"
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const taskData: IUser = {
        ...action.payload,
        id: Math.random() * 1000 + 1,
      };

      state.user.push(taskData);
    },
    removeUser: (state, action) => {
     state.user= state.user.filter((task) => task.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {

    return state.user.user

};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;