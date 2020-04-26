import axios from 'axios';

const api = axios.create({
    baseURL: 'http://treeappubuntu.herokuapp.com'
});

export default api;