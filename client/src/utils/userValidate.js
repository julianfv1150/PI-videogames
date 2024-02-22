const userValidate = ({ user }) => {
    if(user === '') return 'Ingrese un usuario';
    return 'OK';
}

export default userValidate;