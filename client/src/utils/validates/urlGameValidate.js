const urlGameValidate = ({ img }) => {
    if(img === '') return 'Ingrese una URL'
    if(!(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/).test(img)) return "No es una URL válida"
    return true
}

export default urlGameValidate;