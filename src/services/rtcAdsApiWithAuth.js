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
      invalidatesTags: ["Add"],
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
    getAds: builder.query({
      query: () => ({
        url: "ads",
      }),
      providesTags: ["Add","Delete", "Img"],
    }),
    getUsersAds: builder.query({
      query: () => ({
        url: `ads/me`,
      }),
      providesTags: ["Delete", "Add", "Img"],
    }),
    deleteAds: builder.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Delete"],
    }),
    addComment: builder.mutation({
      query: ({ adsId, data }) => ({
        url: `ads/${adsId}/comments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comment"],
    }),
    getAllAdsComments: builder.query({
      query: (id) => ({
        url: "ads/" + id + "/comments",
      }),
      providesTags: ["Comment"],
    }),
    getAdsById: builder.query({
      query: (id) => ({
        url: "ads/" + id,
      }),
      providesTags: ["removeImg", "Edit", "Img"],
    }),
    deleteImg: builder.mutation({
      query: ({ adsId, file_url }) => ({
        url: `ads/${adsId}/image`,
        params: file_url,
        method: "DELETE",
      }),
      invalidatesTags: ["removeImg"],
    }),
    editAds: builder.mutation({
      query: ({ adsId, formData }) => ({
        url: `ads/${adsId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Edit"],
    }),
  }),
});

export const {
  useAddAdsMutation,
  useAddAdsImgMutation,
  useGetUsersAdsQuery,
  useDeleteAdsMutation,
  useGetAllAdsCommentsQuery,
  useAddCommentMutation,
  useGetAdsQuery,
  useGetAdsByIdQuery,
  useDeleteImgMutation,
  useEditAdsMutation,
} = adsApiAuth;
