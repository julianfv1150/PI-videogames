const releasedGameValidate = ({ released }) => {
    if(released === '') return 'Ingrese una fecha de lanzamiento'
    return true
}

export default releasedGameValidate;