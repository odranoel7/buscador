import axios from "axios";

const api = axios.create({
    // https://viacep.com.br/ws/ 86708180/json
    baseURL: "https://viacep.com.br/ws/"
});

export default api;