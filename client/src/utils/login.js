import { URL } from './index'
import axios from 'axios'

const login = async (userData) => {
    URL;
    const { email, password } = userData;
    try {
        const { data } = await axios.get(`${URL}/users?user=${email}&password=${password}`)
        if(data.email === email && data.password === password) return true;
        else{
            return false
        } 
    } catch (error) {
        console.log(error.message);
    }
}

export default login;