import { getToken } from '../util/util';
import axios from 'axios';

const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
};

export const fetchCases = async () => {
    const res = await fetch("http://localhost:1337/cases", config);
    return res.json();
}


export const addSchedule = async ({date, title, location}) => {
    axios.post("http://localhost:1337/schedules",{date, title, location}, config).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    
}


export const fetchCase = async (id) => {
    const res = await fetch("http://localhost:1337/cases/" + id , config);
    return res.json();
}

export const createUser = async ({username,surname,email,password}) => {


    const res = axios.post("http://localhost:1337/auth/local/register", {username,email,password,surname});
    return res;


}





