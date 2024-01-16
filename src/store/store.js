import { configureStore } from "@reduxjs/toolkit";
import { adsApi } from "../services/rtcAdsApi";
import { userApi } from "../services/rtcUserApi";
import { adsApiAuth } from "../services/rtcAdsApiWithAuthjs";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [adsApiAuth.reducerPath]: adsApiAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware).concat(userApi.middleware).concat(adsApiAuth.middleware),
});
