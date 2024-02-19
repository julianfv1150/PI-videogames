const passwordValidate = ({ pass }) => {
    if(pass === "") return "Ingrese una contraseña";
    if(pass.length < 7 ) return "La contraseña ebe tener al menos 8 caracteres";
    if(!/(?=.*?[0-9])/.test(pass)) return "Formato de contraseña inválido";
    return 'OK';
}

export default passwordValidate;

