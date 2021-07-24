import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { todosApiSlice } from '../features/todos/todosApiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(todosApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
