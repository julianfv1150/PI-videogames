/* eslint-disable react/prop-types */
import style from './Card.module.css'
import { noImage } from '../../utils'

const Card = ({ id, name, released, genres, img, rating, platforms }) => {
    
    const allGenres = genres.map(elem => elem.name).join(' ')
    const allPlatforms = platforms.map(elem => elem.name).join(' ')      
    
    const handleErrorImg = (error) => {
        error.target.src = noImage
    }

    return (
        <div className={style.container}> 
            
            <div className={style.img}>
                <img src={img || noImage} onError={handleErrorImg} alt="logo"
                ></img>
            </div>
            <div className={style.card}>
                <p>ID: {id}</p>
                <p>{name}</p>
                <p>Lanzamiento: {released}</p>
                <p>Rating: {rating}</p>
                <p>Géneros: {allGenres}</p>
                <p>Plataformas: {allPlatforms}</p>
            </div>
        </div>
    )
}

export default Card;
