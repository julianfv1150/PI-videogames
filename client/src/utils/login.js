import { URL } from './index'
import axios from 'axios'

const login = async (userData) => {
    URL;
    const { email, pass } = userData;
    try {
        const { data }  = await axios.get(`${URL}/users?email=${email}&pass=${pass}`);
        console.log(data);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default login;