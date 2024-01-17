import axios from "axios";

const SERVER_URL = "http://localhost:8090";
export async function signinUser(data) {
  return await axios.post(`${SERVER_URL}/auth/login`, data);
}

export async function signupUser(data) {
  return await axios.post(`${SERVER_URL}/auth/register`, data);
}

export async function refreshToken() {
  const data = {
    access_token: `${
      JSON.parse(localStorage.getItem("auth_data")).access_token
    }`,
    refresh_token: `${
      JSON.parse(localStorage.getItem("auth_data")).refresh_token
    }`,
  };
  return await axios.put(`${SERVER_URL}/auth/login`, data);
}

export async function getUserData() {
  console.log(JSON.parse(localStorage.getItem("auth_data")));
  return await axios.get(`${SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("auth_data")).access_token
      }`,
    },
  });
}
