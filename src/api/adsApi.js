import axios from "axios";

const SERVER_URL = "http://localhost:8090";
export async function getAllAds() {
    axios.post(`${SERVER_URL}/ads`)
}