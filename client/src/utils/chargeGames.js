import { URL } from './index'
import axios from 'axios'

const chargeGames = async () => {
    const { data } = await axios.get(`${URL}/videogames`)
    return data;
}

export default chargeGames;