import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sisreact-fa3b5.firebaseio.com/'
});

export default instance;