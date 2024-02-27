import { emailValidate, passwordValidate } from '../index'

const loginValidate = (userData) => {

    return emailValidate(userData) === 'OK' && passwordValidate(userData) === 'OK'

}

export default loginValidate;