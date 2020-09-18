import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://apiefeira.fullmindstudio.net',
    baseURL: process.env.REACT_APP_API_URL,
    // baseURL: 'http://localhost:3334',
});

export default api;
