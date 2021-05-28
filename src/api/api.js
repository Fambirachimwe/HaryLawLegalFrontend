import { getToken } from '../util/util';
import axios from 'axios';
import { PRODUCTION_URL, DEVELOPMENT_URL } from "../util/util"


const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
};

export const fetchCases = async () => {
    const res = await fetch(`${DEVELOPMENT_URL}/cases`, config);
    console.log(res)
    return res.json();
}


export const addSchedule = (date, title, Location) => {
    axios.post(`${DEVELOPMENT_URL}/schedules`,{date, title, Location}, config).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    
}


export const fetchCase = async (id) => {
    const res = await fetch(`${DEVELOPMENT_URL}/cases/` + id , config);
    return res.json();
}

export const createUser = async ({username,surname,email,password}) => {


    const res = axios.post(`${DEVELOPMENT_URL}/auth/local/register`, {username,email,password,surname});
    return res;


}





