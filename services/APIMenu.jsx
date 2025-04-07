import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://reqres.in/api',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }
);

export const fetchMenu = async () => {
    try{
        const response = await api.get('/menu');
        return response.data;
    } catch (error) {
        console.log("Erro ao buscar o menu", error.message);
        throw error;
    }
}




export const login = async (credentials) => {
    const response = await api.post("/login/", credentials);
    return response;

};