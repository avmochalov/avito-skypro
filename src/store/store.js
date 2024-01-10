import { configureStore } from "@reduxjs/toolkit";
import { adsApi } from "../services/rtcAdsApi";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});
