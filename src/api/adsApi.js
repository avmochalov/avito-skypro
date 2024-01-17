import axios from "axios";

const SERVER_URL = "http://localhost:8090";
// export async function getAllAds() {
//   await axios.get();
// }
export const getAllAds = async () => {
  const response = await axios.get(`${SERVER_URL}/ads`);
  return response;
};
