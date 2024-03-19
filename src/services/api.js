import axios from "axios";

const basicAuth = 'Basic ' + btoa('admin:admin123');

const api = axios.create({
    baseURL: 'http://3.148.107.48:8000/',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: basicAuth
    } 
});

export { api };