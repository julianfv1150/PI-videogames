const genreGameValidate = ({ genre }) => {
    if(genre.length < 1) return 'Debe ingresar al menos un género'
    return true
}

export default genreGameValidate;