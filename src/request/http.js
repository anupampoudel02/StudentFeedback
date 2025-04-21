import axios from 'axios';


const token = localStorage.getItem('token')


const http = axios.create({
    baseURL: "http://feedback-backend.test/api",
})


http.interceptors.request.use((req) => {
    if(token) {
        req.headers.Authorization =  `Bearer ${token}`
        req.headers['Content-Type'] = 'application/json'
        req.headers["ngrok-skip-browser-warning"] = "est"
    };

    return req;
})


export default http