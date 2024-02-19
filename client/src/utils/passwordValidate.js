const passwordValidate = ({ password }) => {
    
    if(password === "") return {
        state: false,
        message: "Ingrese una contraseña"
    };

    // if(password.length < 6 || password.length > 10) return {
    //     state: false,
    //     message: "Caracteres insuficientes"
    // };
    if(!/(?=.*?[0-9])/.test(password)) return {
        state: false,
        message: "Condiciones insuficientes"
    };
    return {
        state: true
    };
}

export default passwordValidate;

