import axios from "axios";

const SERVER_URL = "http://localhost:8090";
export async function signinUser(data) {
    await axios.post(`${SERVER_URL}/auth/login`, data)
}

export async function signupUser(data) {
    await axios.post(`${SERVER_URL}/auth/register`, data)
}


