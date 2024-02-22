import style from './ViewOptions.module.css'

const viewOptions = () => {

    return(
        <div className="viewOptions">
            <div id="container" className={style.container}>
                    <div className={style.signal}>
                        <h3 id='cambiar'>&raquo;</h3>
                    </div>
                <div className={style.actions}>
                    <div>
                        <h3>Filtros:</h3>
                        <p>Origen</p>
                        <select></select>
                        <p>Género</p>
                        <select></select>
                        <p>Plataforma</p>
                        <select></select>
                    </div>
                    <div>
                        <h3>Orden:</h3>
                        <p>Alfanumérico</p>
                        <select></select>
                        <p>Rating</p>
                        <select></select>
                    </div>
                    <div>
                        <input
                            type='button'
                            value = 'Limpiar'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default viewOptions;
/**
 *  Filter : ORIGEN - GENERO
 *  Order : ASC - DESC - Rating
 **/ 
