import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { refreshToken } from "../api/userApi";

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("auth_data")).access_token;
      if (token) {
        headers.set(
          "Authorization",
          `Bearer ${JSON.parse(localStorage.getItem("auth_data")).access_token}`
        );
      }
      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);
  console.log(args);
  console.log(api);
  console.log(extraOptions)
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await refreshToken();
    if (refreshResult.data) {
      // store the new token
      localStorage.setItem("auth_data", JSON.stringify(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
      return result;
    }
  }
  return result;
};
