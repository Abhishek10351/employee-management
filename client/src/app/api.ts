import axios from "axios";
const baseURL = "http://localhost:8000";
const settings = {
    baseURL: baseURL,
    withCredentials: true,
};
export const api = axios.create(settings);
