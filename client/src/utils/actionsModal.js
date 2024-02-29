export const showModal = (showText) => {
    const windowsModal = document.getElementById('divModal')
    const textModal = document.getElementById('pModal')
    windowsModal.className = 'modalUp'
    textModal.innerText = showText
}
export const closeModal = () => {
    const windowsModal = document.getElementById('divModal')
    const textModal = document.getElementById('pModal')
    windowsModal.className = 'modal'
    textModal.innerText = ''
}

export const succesModal = (showText) => {
    const windowsModal = document.getElementById('divModal')
    const textModal = document.getElementById('pModal')
    windowsModal.className = 'modalUp'
    textModal.className ='pModal    '
    textModal.innerText = showText
}
