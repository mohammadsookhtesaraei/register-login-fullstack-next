import axios from "axios";


import { apiUrl } from "@/configs/global";



const app = axios.create({
    baseURL: apiUrl,
    withCredentials: true
});



const http = {
    get: app.get,
    post: app.post
};


export default http;

