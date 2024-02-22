import { URL } from './index'
import axios from 'axios'

const chargeGames = async () => {
    console.log('creando listado de juegos, por favor espere..');
    const { data } = await axios.get(`${URL}/videogames`)
    return data;
}

export default chargeGames;