const platformGameValidate = ({ platform }) => {
    if(platform.length < 1) return 'Debe ingresar al menos una plataforma'
    return true
}

export default platformGameValidate;