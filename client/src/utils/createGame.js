
import { URL } from './index'
import axios from 'axios'

const createGame = async(gamesData) => {

    try {
        const { data } = await axios.post(`${URL}/videogames`, gamesData)
        return data
    } catch (error) {
        console.log(error);
    }
}

export default createGame;