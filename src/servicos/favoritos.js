import axios from "axios";

const favoritosAPI = axios.create({baseURL: 'https://helterbooksserver.netlify.app/.netlify/functions/favoritos'});

async function getLivrosFavoritos() {
    const response = await favoritosAPI.get();

    return response.data;
}

async function postLivrosFavorito(id) {
    await favoritosAPI.post(`/${id}`);
}

async function deleteLivrosFavorito(id) {
    await favoritosAPI.delete(`/${id}`);
}

export {
    getLivrosFavoritos,
    postLivrosFavorito,
    deleteLivrosFavorito
};