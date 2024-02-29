/* eslint-disable react/prop-types */
import style from './CardDetail.module.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { URL, noImage } from '../../utils';
import { useState, useEffect } from 'react';

const CardDetail = () => {

    const params = useParams().id;
    const [ game, setGame ] = useState({
        id: 'Cargando..',
        name: 'Cargando..',
        released:'Cargando..',
        img: 'Cargando..',
        description: 'Cargando..',
        rating:'Cargando..',
        genres:['Cargando..'],
        platforms:['Cargando..'],
    })
    
    useEffect(() => {
        axios.get(`${URL}/videogames/${params}`).then(({ data }) => {
            setGame(data)
        })
    },[params])

    const handleErrorImg = (error) => {
        if (error.target.name === 'img') {
            error.target.onError = null;
            error.target.src = noImage;
        } 
    }

    return (
        <div className="createGame">
            <div className={style.container}>
                <div className={style.visual}>
                    <img name='img' className={style.imagen} src={game.img} onError={handleErrorImg} alt={game.name}></img>
                    <h2 className={style.titulo}>{game.name}</h2>
                </div>
                <div className={style.data} key={game.id}>
                    <h2>ID: {game.id}</h2>
                    <br></br>
                    <br></br>
                    <h3>Lanzamiento</h3>
                    <span>{game.released}</span>
                    <br></br>
                    <br></br>
                    <h3>Rating</h3>
                    <span>{game.rating}</span>
                    <br></br>
                    <br></br>
                    <h3>Géneros</h3>
                    {
                        game.genres.map(genre =>(
                            <li className={style.items} key={genre.id}>{genre}</li>
                        ))
                    }
                    <br></br>
                    <h3>Plataformas</h3>
                    
                    {
                        game.platforms.map(platform =>(
                            <li className={style.items} key={platform.id}>{platform}</li>
                        ))
                    }
                    
                    <br></br>
                </div>
                <div className={style.descripcion}>
                    <p>{game.description}</p>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default CardDetail;