import { URL } from '../src/utils/index'
import axios from 'axios'
import { ONLINE, OFFLINE, CREATE, FLAG, NAMEGAMES, PAGEMORE, PAGELESS } from './actions'

export const online = (userData) => {
    return async (dispatch) =>{
        try {
            const {email, pass } = userData;
            const { data } = await axios.get(`${URL}/users?email=${email}&pass=${pass}`);
            userData.name = data.name;
            return dispatch({
                type: ONLINE,
                payload: userData
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

export const offline = () => {
    return (dispatch) =>{
        return dispatch({
                type: OFFLINE
            })
        }
}

export const create = (vgames) => {
        return (dispatch) => {
            return dispatch({
                type: CREATE,
                payload: vgames
            })
        }
}

export const flag = (flag) => {
    return (dispatch) => {
        return dispatch({
            type: FLAG,
            payload: flag
        })
    }
}

export const nameGames = (nameGames) => {
    return (dispatch) => {
        return dispatch({
            type: NAMEGAMES,
            payload: nameGames
        })
    }
}

export const pagemore = (more) => {
    return (dispatch) => {
        return dispatch({
            type: PAGEMORE,
            payload: more
        })
    }
}

export const pageless = (less) => {
    return (dispatch) => {
        return dispatch({
            type: PAGELESS,
            payload: less
        })
    }
}


