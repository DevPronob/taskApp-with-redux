import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../redux/features/task/taskSlice'
import userReducer from '../redux/features/task/userSlice'
export const store = configureStore({
  reducer: {
    tasks:taskReducer,
    user:userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch