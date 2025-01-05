import axios from "axios";

const categoriasAPI = axios.create({baseURL: 'http://localhost:8000/categorias'});

async function getCategorias() {
    const response = await categoriasAPI.get();

    return response.data;
}

export {
    getCategorias,
};