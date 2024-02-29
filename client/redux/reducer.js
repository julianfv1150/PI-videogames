import { ONLINE, OFFLINE, CREATE, FLAG, NAMEGAMES, PAGEMORE, PAGELESS, UPDATE, FILTER, ORDER } from './actions'

const reducer = (state = {
    user:[],
    videoGames:[],
    searchGames: [],
    filterGames: [[],[]],
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
        case UPDATE:
                return {
                      ...state, filterGames: [state[action.payload], state[action.payload]]
                };
        case FILTER:
                return {
                        ...state, filterGames: [
                                state.filterGames[0], 
                                state.filterGames[0].filter(elem => {
                                        if(action.payload.origen === '') return true
                                        if(action.payload.origen === 'DB') return typeof(elem.id) === 'string';
                                        if(action.payload.origen === 'API') return typeof(elem.id) === 'number';
                                })
                                .filter(elem => {
                                        if(action.payload.genero !== '') return elem.genres.some(genre => genre.name === action.payload.genero);
                                        if(action.payload.genero === '') return true;
                                })
                                .filter(elem => {
                                        if(action.payload.plataforma !== '') return elem.platforms.some(platform =>platform.name === action.payload.plataforma)
                                        if(action.payload.plataforma === '') return true
                                })
                        ]
                };
        case ORDER:
                return {
                        ...state, filterGames: [state.filterGames[0], state.filterGames[1].sort((a, b) => {
                                
                                if(action.payload.orden === "") return true
                                if(isNaN(a[action.payload.orden])){
                                        if(action.payload.mayusMinus === 'asc')
                                                return a[action.payload.orden].localeCompare(b[action.payload.orden], 'es', { numeric: true })
                                        if(action.payload.mayusMinus === 'desc')
                                                return b[action.payload.orden].localeCompare(a[action.payload.orden], 'es', { numeric: true })
                                }
                                else{
                                        if(action.payload.mayusMinus === 'asc')
                                                return parseFloat(a[action.payload.orden]) - parseFloat(b[action.payload.orden])
                                        if(action.payload.mayusMinus === 'desc') 
                                        return parseFloat(b[action.payload.orden]) - parseFloat(a[action.payload.orden])  
                                }
                        })]
                };
        default:
            return state
    }
}

export {
    reducer
};