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
    }),
    addAdsImg: builder.mutation({
      query: ( {adsId, body}) => ({
        url: `ads/${adsId}/image`,
        headers: { formData: true },
        method: 'POST',
        body,
      }),
    }),
    getUsersAds: builder.query({
      query: ( ) => ({
        url: `ads/me`,
      }),
    }),
  }),
});

export const { useAddAdsMutation,useAddAdsImgMutation, useGetUsersAdsQuery } = adsApiAuth;
