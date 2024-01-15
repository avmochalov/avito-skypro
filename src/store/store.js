import { configureStore } from "@reduxjs/toolkit";
import { adsApi } from "../services/rtcAdsApi";
import { userApi } from "../services/rtcUserApi";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware).concat(userApi.middleware),
});
