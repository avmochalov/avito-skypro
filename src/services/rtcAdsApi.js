import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: () => ({
        url: "ads",
      }),
    }),
    getAdsById: builder.query({
      query: (id) => ({
        url: "ads/" + id,
      }),
    }),
    getAllAdsComments: builder.query({
      query: (id) => ({
        url: "ads/" + id + "/comments",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "user/all",
      }),
    }),
    getAllAdsByUser: builder.query({
      query: (id) => ({
        url: "ads?user_id=" + id,
      }),
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdsByIdQuery,
  useGetAllAdsCommentsQuery,
  useGetAllUsersQuery,
  useGetAllAdsByUserQuery,
} = adsApi;
