import axios from "axios";
// import instance from "./axios";
// logic for login and register
const api_url="http://localhost:8181";
export const signIn=(data)=>axios.post(`${api_url}/api/v1/auth/login`,data);
export const signUp=(data)=>axios.post(`${api_url}/api/v1/auth/register`,data)