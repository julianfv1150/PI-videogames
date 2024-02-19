
const emailValidate = ({ email }) => {
    if(email === "") return "Ingrese un email";
    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))return "Formato de email inválido";
    return "OK";
    //if(email.length > 35) return "Debe tener menos de 35 caracteres";
}
export default emailValidate;
