
const emailValidate = ({ email }) => {

    if(email === '') return {
        state: false,
        message: "Usuario vacío"
    };
    //if(email.length > 35) return "Debe tener menos de 35 caracteres";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/.test(email)) return {
        state: false,
        message: "Email inválido"
    };
    return {
        state: true,
    };
}

export default emailValidate;
