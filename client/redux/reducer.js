import { ONLINE, OFFLINE, CREATE, FLAG, NAMEGAMES, PAGEMORE, PAGELESS } from './actions'

const reducer = (state = {
    user:[],
    videoGames:[],
    searchGames: [],
    filterGames: [],
    flag: 'videoGames',
    page: 1
    
    }, action) => {

    switch(action.type){
        
        case ONLINE:
                return {
                    ...state, user: action.payload
                };
        case OFFLINE:
                return {...state, user: []
                };
        case CREATE:
                return {
                    ...state, videoGames: action.payload
                };
        case FLAG:
                return {
                    ...state, flag: action.payload, page: 1
                };
        case NAMEGAMES:
                return {
                      ...state, searchGames: action.payload
                };
        case PAGEMORE:
                return {
                  ...state, page: action.payload
                };
        case PAGELESS:
                return {
                      ...state, page: action.payload
                };
        default:
            return state
    }
}

export {
    reducer
};