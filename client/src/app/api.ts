import axios from "axios";
import { config } from "dotenv";

config();
import Cookies from "js-cookie";
let baseURL = "http://localhost:8000";

baseURL = process.env.baseURL || baseURL;

const settings = {
    baseURL: baseURL,
    withCredentials: true,
};
export const api = axios.create(settings);

export const logout = async () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
};
