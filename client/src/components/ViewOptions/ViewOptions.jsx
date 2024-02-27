import style from './ViewOptions.module.css'
import axios from 'axios'
import { URL } from '../../utils/index';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { flag, update, filter, order } from '../../../redux/actionsCreators'

const ViewOptions = () => {

    const flagPos = useSelector(state => state.flag)
    const dispatch = useDispatch()
    const [ selects, setSelects ] = useState({
        generos: [],
        plataformas: [],
        filters: {
            origen: '',
            genero: '', 
            plataforma: ''
        },
        orders: {
            orden: '',
            mayusMinus: ''
        }        
    })
    
    useEffect(() => {      
        let genre = [];
        axios.get(`${URL}/genre`)
        .then(response => {
            response.data.forEach(elem => {
                    genre.push(elem.name)
            });
             return axios.get(`${URL}/platform`)    
        })
        .then(response => {
            let platforms = [];
            response.data.forEach(elem => {
                    platforms.push(elem.name)
            });
            setSelects({...selects, generos: genre, plataformas: platforms});
        })
    }, [])

    const handleChange = () => {
        
        let mayusMinus;
        document.querySelector('input[type=radio][name=mayusMinus]:checked') === null
            ? mayusMinus = ''
            : mayusMinus = document.querySelector('input[type=radio][name=mayusMinus]:checked').value;

        setSelects({...selects, filters: {
                                        origen: document.getElementById('origen').value,
                                        genero: document.getElementById('genero').value,
                                        plataforma: document.getElementById('plataforma').value                                        
                                        },
                                orders: {
                                        orden: document.getElementById('orden').value,
                                        mayusMinus: mayusMinus
                                        }
        });
    }    
    
    const handleSubmit = () => {
        event.preventDefault();
        if(flagPos !== 'filterGames'){
            dispatch(update(flagPos))
            dispatch(flag('filterGames'))                     
        }
        dispatch(filter(selects.filters))
        dispatch(order(selects.orders))        
    }

    return(
        <div className="viewOptions">
            <div className={style.container}>
                <div className={style.signal}>
                    <h3 id='cambiar'>&raquo;</h3>
                </div>                    
                <form className={style.actions} onSubmit={handleSubmit}>
                    <div>
                        <h3>Filtros:</h3>
                        <p>Origen</p>
                        <select id='origen' name='origen' defaultValue='' onChange={handleChange}>
                            <option value='' >Seleccione...</option>
                            <option value='DB' >DB</option>
                            <option value='API' >API</option>
                        </select>
                        <p>Género</p>
                        <select id='genero' name='genero' defaultValue='' onChange={handleChange}>
                            <option value='' >Seleccione...</option>
                            {selects.generos.map(elem => (
                                <option key={elem} value={elem}>{elem}</option>
                            ))}
                        </select>
                        <p>Plataforma</p>
                        <select id='plataforma' name='plataforma' defaultValue='' onChange={handleChange}>
                            <option value='' >Seleccione...</option>
                            {selects.plataformas.map(elem => (
                                <option key={elem} value={elem}>{elem}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3>Orden:</h3>
                        <select id='orden' name='orden' defaultValue='name' onChange={handleChange}>
                            <option value='' >Seleccione...</option>
                            <option value='id' >Id</option>
                            <option value='name' >Nombre</option>
                            <option value='rating' >Rating</option>
                        </select>
                        <fieldset className={style.fieldset}>
                            <input 
                                type="radio" 
                                name="mayusMinus" 
                                value="asc"
                                onChange={handleChange}/>
                            <p>Asc</p>
                            <input  
                                type="radio"  
                                name="mayusMinus" 
                                value="desc"
                                onChange={handleChange}
                                />
                            <p>Desc</p>
                        </fieldset>
                    </div>                    
                    <div>
                        <input
                            type='Submit'
                            value = 'Aplicar'
                            onChange={handleChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ViewOptions;