import axios from "axios";

const livrosAPI = axios.create({baseURL: 'https://helterbooksserver.netlify.app/.netlify/functions/livros'});

async function getLivros() {
    const response = await livrosAPI.get('/');

    return response.data;
}

export {
    getLivros
};