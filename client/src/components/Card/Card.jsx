/* eslint-disable react/prop-types */
import style from './Card.module.css'

const Card = ({ id, name, released, rating, genres, img }) => {
    const allGenres = genres.map(elem => elem.name).join(' ')

    return (
        <div className={style.container}> 
            <div className={style.img}>
                <img src={img} alt="logo"></img>
            </div>
            <div className={style.card}>
                <p>ID: {id}</p>
                <p>{name}</p>
                <p>Lanzamiento: {released}</p>
                <p>Rating: {rating}</p>
                <p>Géneros: {allGenres}</p>
            </div>
        </div>
    )
}

export default Card;
