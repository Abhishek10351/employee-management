import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://localhost:8000";
const settings = {
    baseURL: baseURL,
    withCredentials: true,
};
export const api = axios.create(settings);

export const logout = async () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
};
