import axios from "axios";

let headers = {};
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);
if (userInfo) {
  headers.Authorization = `Bearer ${userInfo.accessToken}`;
}

export const api = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
  headers,
});
