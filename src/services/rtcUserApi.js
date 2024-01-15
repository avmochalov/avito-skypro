import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "user",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (formData) => ({
        url: "user",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
