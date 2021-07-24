import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todosApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    // IN CASE OF AUTHENTICATION
    // prepareHeaders(headers) {
    //     headers.set('x-api-key', KEY)
    //     return headers
    // }
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query<Todo[], number | void>({
        // ADD ANY QUERY PARAMS
        query(limit = 10) {
          // RETURN URL SLICE FOR THIS FETCH
          return `/todos`
        },
      }),
    }
  },
})

export const { useFetchTodosQuery } = todosApiSlice
