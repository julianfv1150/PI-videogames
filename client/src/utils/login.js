import { URL } from './index'
import axios from 'axios'

const login = async (userData) => {
    URL;
    const { email, pass } = userData;
    try {
        const { data }  = await axios.get(`${URL}/users?email=${email}&pass=${pass}`);
        return data.state;
    } catch (error) {
        console.log(error.message);
    }
}

export default login;