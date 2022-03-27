import axios from "axios";
const url = "http://localhost:8080";
export const http = axios.create({
    baseURL: url
})

export const privateHttp = axios.create({
    baseURL: url
})

privateHttp.interceptors.request.use((config) => {
    config.headers.Authorization =   `Bearer ${sessionStorage.getItem("token")}`
    return config
})