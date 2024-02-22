import axios from 'axios'
import { URL } from './index'

const userCreate = async (userData) => {
    try {
        const { email, name, pass } = userData;
        const { data } = await axios.post(`${URL}/users`,{
            email,
            name,
            password: pass
        })
        return data
    } catch (error) {
        console.log(error);
    }
}

export default userCreate;