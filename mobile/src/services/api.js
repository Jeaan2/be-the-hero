import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.31.46:3333'
});

export default api;