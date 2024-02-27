import style from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBar } from '../index';
import { flag } from '../../../redux/actionsCreators';

const Navigation = (logOut) => {

    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()

    const changeReducer = () => {
        dispatch(flag('videoGames'))
    }

    return(
        <div className="navigation">
            <div className={style.container}>
                <Link to='/home' className={style.link} onClick={()=>changeReducer()}><h2>Home</h2></Link>
                <Link to='/newGame' className={style.link} ><h2>Agregar</h2></Link>
                <div>
                    <Link className={style.link} onClick={()=>{logOut()}}>
                        <img
                            className={style.user} 
                            src='./src/assets/user-icon.svg'>
                        </img>
                    </Link>
                    <br></br>
                    <p>Buen día</p> 
                    <p>{userData.name}</p> 
                </div>
            <div className={style.searchBar}>
                <SearchBar />
            </div>    
            </div>
        </div>
    )
}

export default Navigation;