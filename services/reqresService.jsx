// services/reqresService.js

export const loginReqres = async ({ email, password }) => {
    const response = await fetch("https://api.npoint.io/363e91c80fa714ec293c");
    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    const users = await response.json();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        throw new Error("Credenciais inválidas");
    }

    // Simula uma estrutura de resposta com o token
    return { data: { token: user.token } };
};
