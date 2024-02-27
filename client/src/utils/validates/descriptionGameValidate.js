const descriptionGameValidate = ({ description }) => {
    if(description === '') return 'Ingrese una descripción'
    return true
}

export default descriptionGameValidate;