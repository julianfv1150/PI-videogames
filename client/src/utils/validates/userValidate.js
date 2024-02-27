const userValidate = ({ name }) => {
    if(name === '') return 'Ingrese un usuario';
    return 'OK';
}

export default userValidate;