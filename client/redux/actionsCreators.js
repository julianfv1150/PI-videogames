import { URL } from '../src/utils/index'
import axios from 'axios'
import { ONLINE, OFFLINE, CREATE, FLAG, NAMEGAMES, PAGEMORE, PAGELESS, FILTER, UPDATE, ORDER } from './actions'

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

export const update = (arreglo) => {
    return (dispatch) => {
        return dispatch({
            type: UPDATE,
            payload: arreglo
        })
    }
}

export const filter = (valueFilters) => {
    console.log('Despachando filter:', valueFilters);
    return (dispatch) => {
        return dispatch({
            type: FILTER,
            payload: valueFilters
        })
    }
}

export const order = (orden) => {
    console.log('Despachando orders:', orden)
    return (dispatch) => {
        return dispatch({
            type: ORDER,
            payload: orden
        })
    }
}