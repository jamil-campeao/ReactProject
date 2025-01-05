import axios from "axios";

const categoriasAPI = axios.create({baseURL: 'https://helterbooksserver.netlify.app/.netlify/functions/categorias'});

async function getCategorias() {
    const response = await categoriasAPI.get();

    return response.data;
}

export {
    getCategorias,
};