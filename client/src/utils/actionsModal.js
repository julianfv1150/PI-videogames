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

