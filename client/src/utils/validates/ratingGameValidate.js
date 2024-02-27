const ratingGameValidate = ({ rating }) => {
    if(rating === '') return 'Ingrese un rating'
    if(isNaN(rating)) return 'Debe ser un número'
    if(rating < 0 || rating > 5) return 'Debe ser mayou que 0 y menor que 5'
    return true
}

export default ratingGameValidate;