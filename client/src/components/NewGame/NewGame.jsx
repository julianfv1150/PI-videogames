/* eslint-disable react/prop-types */
import style from './NewGame.module.css'
import { URL, createGame, nameGameValidate, descriptionGameValidate, urlGameValidate, ratingGameValidate, 
genreGameValidate, platformGameValidate, releasedGameValidate, newGameValidate, showModal, succesModal } from '../../utils/index'
import { useState, useEffect } from 'react'
import axios from 'axios'


const NewGame = () => {

    const [ gamesData, setGamesData ] = useState({
        name: '',
        description: '',
        img: '',
        released: '',
        rating: '',
        genre: [],
        platform: [],
        generos: [],
        plataformas: []
    })
    const [ gamesError, setGamesError ] = useState({
        errName: '',
        errDescription: '',
        errImg: '',
        errReleased: '',
        errRating: '',
        errGenre: '',
        errPlatform: ''
    })
    
    
    const handleChange = (event) => {
        
        (event.target.name === 'name') && setGamesData({...gamesData, name: event.target.value});
        (event.target.name === 'img') && setGamesData({...gamesData,  img: event.target.value});
        (event.target.name === 'rating') && setGamesData({...gamesData, rating: event.target.value});
        (event.target.name === 'description') && setGamesData({...gamesData, description: event.target.value});
        (event.target.name === 'released') && setGamesData({...gamesData, released: event.target.value});
        (event.target.name === 'genre') && setGamesData({...gamesData, genre: [...gamesData.genre, event.target.value]});
        (event.target.name === 'platform') && setGamesData({...gamesData, platform: [...gamesData.platform, event.target.value]});
        
        (event.target.name === 'name') && setGamesError({...gamesError,errName: nameGameValidate({...gamesData, name: event.target.value})});
        (event.target.name === 'img') && setGamesError({...gamesError,errImg: urlGameValidate({...gamesData,  img: event.target.value})});
        (event.target.name === 'rating') && setGamesError({...gamesError,errRating: ratingGameValidate({...gamesData, rating: event.target.value})});
        (event.target.name === 'description') && setGamesError({...gamesError,errDescription: descriptionGameValidate({...gamesData, description: event.target.value})});
        (event.target.name === 'released') && setGamesError({...gamesError,errReleased:releasedGameValidate({...gamesData, released: event.target.value})});
        
        (event.target.name === 'genre') && setGamesError({...gamesError,errGenre: genreGameValidate({...gamesData, genre: [...gamesData.genre, event.target.value]})});
        (event.target.name === 'platform') && setGamesError({...gamesError,errPlatform: platformGameValidate({...gamesData, platform: [...gamesData.platform, event.target.value]})});
    }  
    
    const sacarElemento = (arreglo, valor) => {
        setGamesData({...gamesData, [arreglo]:gamesData[arreglo].filter(elem => elem !== valor)})
    }

    const handleSubmit = () => {
        event.preventDefault();
        if(newGameValidate(gamesData)){
            createGame(gamesData)
            succesModal('Juego creado con éxito')
        }
        else {
            showModal('No se cumplen las condiciones necesarias');
        }
    }
    
    useEffect(() => {      
        let genre = [];
        axios.get(`${URL}/genre`)
        .then(response => {
            response.data.forEach(elem => {
                    genre.push(elem)
            });
             return axios.get(`${URL}/platform`)    
        })
        .then(response => {
            let platforms = [];
            response.data.forEach(elem => {
                    platforms.push(elem)
            });
            setGamesData({...gamesData, generos: genre, plataformas: platforms});
        })
    },[])

    return (
        <div className='createGame'>
                <form  className={style.container} onSubmit={handleSubmit}>
                    <br></br>
                    <h2>Crear juego</h2>
                    <br></br>
                    <fieldset className={style.grouped}>
                        <legend>Datos</legend>
                        <div>
                            <label htmlFor="lblName">Nombre: </label>
                            <input
                                type="text" 
                                name="name"
                                placeholder="Ingrese un nombre"
                                autoComplete='off'
                                value={gamesData.name}
                                onChange={handleChange}
                            />
                            <hr></hr>
                            <p className={gamesError.errName !== 'true' ? style.errors : style.invisible}>
                                {gamesError.errName}</p>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="lblImg">Imagen: </label>
                            
                            <hr></hr>
                            <p className={gamesError.errImg !== true ? style.errors : style.invisible}>
                                {gamesError.errImg}</p>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="lblRating">Rating: </label>
                            <input
                                type="text" 
                                name="rating"
                                placeholder="Desde 0.00 hasta 5.00" 
                                autoComplete='off'
                                value={gamesData.rating}
                                onChange={handleChange}
                            />
                            <hr></hr>
                            <p className={gamesError.errRating !== true ? style.errors : style.invisible}>
                                {gamesError.errRating}</p>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="lblDescripcion">Descripción:</label>
                            <br></br>
                            <textarea 
                                name="description"
                                placeholder="Ingrese una descripción"
                                value={gamesData.description}
                                onChange={handleChange}/>
                            <p className={gamesError.errDescription !== true ? style.errors : style.invisible}>
                                {gamesError.errDescription}</p>
                        </div>    
                    </fieldset>
                    <br></br>
                    <fieldset className={style.grouped}>
                        <legend>Opciones</legend>
                        <div>
                            <span>Géneros:</span>
                            <select id='genre' name='genre' defaultValue='' onChange={handleChange}>
                                    <option value='' >Seleccione...</option>
                                    {gamesData.generos.map(elem => (
                                        <option key={elem.id} value={elem.name}>{elem.name}</option>
                                    ))}
                                </select>
                            <hr></hr>
                            <p className={gamesError.errGenre !== true ? style.errors : style.invisible}>
                                {gamesError.errGenre}</p>
                                {gamesData.genre.map(id => (
                                        <input
                                            key={id}
                                            type='button'
                                            name='genreSelected'
                                            value={gamesData.generos.find(genero => genero.id === id)?.name + ' X'}
                                            onClick={() => sacarElemento('genre', id)}
                                            onChange={handleChange}
                                        />                                
                                ))}
                        </div>
                        <br></br>
                        <div>
                            <span>Plataformas:</span>
                            <select id='platform' name='platform' defaultValue='' onChange={handleChange}>
                                    <option value='' >Seleccione...</option>
                                    {gamesData.plataformas.map(elem => (
                                        <option key={elem.id} value={elem.id}>{elem.name}</option>
                                    ))}
                            </select>
                            <hr></hr>
                            <p className={gamesError.errPlatform !== true ? style.errors : style.invisible}>
                                {gamesError.errPlatform}</p>
                                {gamesData.platform.map(id => (
                                        <input
                                            key={id}
                                            type='button'
                                            name='platformSelected'
                                            value={gamesData.plataformas.find(plataforma => plataforma.id === id)?.name + ' X'}
                                            onClick={() => sacarElemento('platform', id)}
                                            onChange={handleChange}
                                        />                                
                                ))}
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="lblReleased">Lanzamiento: </label>
                            <input
                                type="date" 
                                name="released"
                                placeholder="Formato YYYY-MM-DD"
                                width='100%'
                                value={gamesData.released}
                                onChange={handleChange}/>
                        </div>
                        <p className={gamesError.errReleased !== true ? style.errors : style.invisible}>
                                {gamesError.errReleased}</p>
                        <br></br>
                    </fieldset>
                    <br></br>
                    <div>
                        <input 
                            type="submit" 
                            name="Submit"
                            value="Crear"
                        />
                    </div>
                </form>
            <br></br>
            </div>
    )
}

export default NewGame;