import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder)=>({
    getAll: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET'
      })
    }),
    getById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'GET'
      })
    }),
    deleteById: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      })
    }),
    postAdd: builder.mutation({
      query: (postNew) => ({
        url: 'posts',
        method: 'POST',
        body: postNew,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    putUpdate: builder.mutation({
      query: (postUpt) => {
        const { id, ...data } = postUpt
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      }
    })
  })
})

export const { useGetAllQuery, useGetByIdQuery, useDeleteByIdMutation, usePostAddMutation, usePutUpdateMutation } = testApi