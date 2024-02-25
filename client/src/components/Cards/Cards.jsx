import style from './Cards.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { pagemore, pageless } from '../../../redux/actionsCreators'

const Cards = () => {

    const { flag, page }  = useSelector(state => state)
    const vgames = useSelector(state =>(flag !== 'filterGames') ? state[flag] : state[flag][1])
    const dispatch = useDispatch()

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
    
    return (
        <div className="cards">
            <div className={style.container}>
                {
                    vgames.map((games, index) =>{
                        if(index >= bottom && index <= top){
                            return <Card 
                                key={games.id} 
                                id={games.id} 
                                name={games.name} 
                                released={games.released} 
                                img={games.img} 
                                genres={games.genres}
                                platforms={games.platforms}
                                rating={games.rating} />
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