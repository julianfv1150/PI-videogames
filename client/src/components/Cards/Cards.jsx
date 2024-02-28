import style from './Cards.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { pagemore, pageless, create, flag } from '../../../redux/actionsCreators'
import { chargeGames } from '../../utils'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showModal } from '../../utils'

const Cards = () => {

    const dispatch = useDispatch();
    const flagg = useSelector(state => state.flag)
    const { page }  = useSelector(state => state)
    const vgames = useSelector(state =>(flagg !== 'filterGames') ? state[flagg] : state[flagg][1])

    const prev = () => {
        if(page >= 2){
            dispatch(pageless(page - 1))
        }
    }
    const next = () => {
        if(page < (Math.ceil(vgames.length / 15))){
            dispatch(pagemore(page + 1))
        }
    }
    
    const bottom = (page -1)*15
    let top;
    if(page === Math.ceil(vgames.length / 15)){
        top = vgames.length
    }
    else{
        top = (page * 15) - 1
    }
    
    useEffect(()=>{
        chargeGames().then(data => {
            dispatch(create(data))
        })
    }, [])

    useEffect(()=>{
        if(vgames.length === 0 && flagg === 'filterGames') {
            showModal('No se encontraron coincidencias, realiza otra búsqueda..')
            setTimeout(() => {
                dispatch(flag('videoGames'))
            }, 1000)
        }
    },[vgames])
    
    return (
        <div className="cards">
            <div className={style.container}>
                {                    
                    vgames.map((games, index) =>{
                        if(index >= bottom && index <= top){
                            return <Link to={`/videogamesDetail/${games.id}`} key={games.id}  ><Card                                
                                id={games.id} 
                                name={games.name} 
                                released={games.released} 
                                img={games.img} 
                                genres={games.genres}
                                platforms={games.platforms}
                                rating={games.rating} /></Link>
                        }  
                    })                    
                }
            </div>
            
            <div className={style.page}>
                <div></div>
                <div className={style.pagination}>
                   <button
                    type="button" 
                    name="preview" 
                    onClick={()=>prev()}
                >
                Anterior
                </button>
                <span>Page {page}</span>
                <button
                    type="button" 
                    name="next" 
                    onClick={()=>next()}
                >
                Siguiente
                </button>    
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Cards;