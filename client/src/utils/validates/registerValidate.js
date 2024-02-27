import { emailValidate, userValidate, passwordValidate } from '../index'

const loginValidate = (userData) => {

    return emailValidate(userData) === 'OK' && userValidate(userData) === 'OK' && passwordValidate(userData) === 'OK'

}

export default loginValidate;