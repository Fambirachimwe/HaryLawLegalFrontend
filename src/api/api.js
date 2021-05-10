import { getToken } from '../util/util';
import axios from 'axios';
import { PRODUCTION_URL } from "../util/util"


const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
};

export const fetchCases = async () => {
    const res = await fetch(`${PRODUCTION_URL}/cases`, config);
    return res.json();
}


export const addSchedule = (date, title, Location) => {
    axios.post(`${PRODUCTION_URL}/schedules`,{date, title, Location}, config).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    
}


export const fetchCase = async (id) => {
    const res = await fetch(`${PRODUCTION_URL}/cases/` + id , config);
    return res.json();
}

export const createUser = async ({username,surname,email,password}) => {


    const res = axios.post(`${PRODUCTION_URL}/auth/local/register`, {username,email,password,surname});
    return res;


}





