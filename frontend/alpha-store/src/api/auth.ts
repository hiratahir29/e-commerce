
import {api} from './api';



export const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation<any,any>({
      query: (data: any) => ({
        url: 'login',
        method: 'POST',
        body: data
      }) ,
    }),
  }),
})

export const { useUserLoginMutation } = auth