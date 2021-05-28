export const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
}


export const Roles = {
    LAWYER: "Lawyer",
    AUTHENTICATED: "authenticated"
}


export const FormFields = {
    username: "username",
    surname: "surname",
    email: "email",
    password: "password"
}

export const PRODUCTION_URL = "https://harrylawlegal.herokuapp.com";

export const DEVELOPMENT_URL = "http://localhost:1337"