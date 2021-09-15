import axios from "axios";

function createUser() {

    const signUp = {
        "email": "leandro@driven.com",
    "password": "12",
    "username": "banana",
    "pictureUrl": "https://http.cat/411.jpg"
    }

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up', signUp)

    return promise;
};

function login() {

    const signIn = {
        "email": "leandro@driven.com",
        "password": "12"
    }

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in', signIn);
    return promise;
}

export  {
    createUser,
    login
}