import style from './SearchBar.module.css'
import { useState } from 'react'
import { searchGames } from '../../utils/index'
import { useDispatch } from 'react-redux'
import { flag, nameGames } from '../../../redux/actionsCreators'

const SearchBar = () => {

    const dispatch = useDispatch();

    const [ nameGame, setNameGame ] = useState({name:''})

    const handleChange = (event) => {
        setNameGame({name: event.target.value})
    }

    const search = () => {
        searchGames(nameGame.name)
            .then(data => {
                dispatch(nameGames(data))
                dispatch(flag('searchGames'))
            })
    }

    return(
        <div className={style.container}>
            
                <input
                    className={style.input}
                    type="search"
                    name="email"
                    autoComplete='off'
                    placeholder="Ingrese el nombre del juego"
                    onChange={handleChange}

                />
            
            <div className={style.buttonSearch}>
                <button 
                    type="button" 
                    name="search"
                    onClick={()=>{search()}}
                >
                Buscar
                </button>
            </div>
        </div>
    )
}

export default SearchBar;