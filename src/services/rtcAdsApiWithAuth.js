import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
export const adsApiAuth = createApi({
  reducerPath: "adsApiAuth",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    addAds: builder.mutation({
      query: (formData) => ({
        url: `adstext`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Add", 'Img'],
    }),
    addAdsImg: builder.mutation({
      query: ({ adsId, body }) => ({
        url: `ads/${adsId}/image`,
        headers: { formData: true },
        method: "POST",
        body,
      }),
      invalidatesTags: ["Img"],
    }),
    getUsersAds: builder.query({
      query: () => ({
        url: `ads/me`,
      }),
      providesTags: ["Delete", 'Add'],
    }),
    deleteAds: builder.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Delete"],
    }),
  }),
});

export const {
  useAddAdsMutation,
  useAddAdsImgMutation,
  useGetUsersAdsQuery,
  useDeleteAdsMutation,
} = adsApiAuth;
