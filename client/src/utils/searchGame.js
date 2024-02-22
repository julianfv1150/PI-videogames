import axios from 'axios'
import { URL } from './index'

const searchGame = async (name) => {
    console.log('Buscando juego, por favor espere..');
    const { data } = await axios.get(`${URL}/videogames/name?name=${name}`)
    return(data);
}

export default searchGame;