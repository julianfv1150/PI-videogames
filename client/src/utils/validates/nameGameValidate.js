const nameGameValidate = ({ name }) => {
    if(name === '') return 'Ingrese un nombre'
    return true
}

export default nameGameValidate;