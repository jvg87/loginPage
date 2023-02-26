
document.querySelector('.mobileMenu').addEventListener('click', () =>{
    document.querySelector('.navigation').classList.toggle('showMenu')
    document.querySelector('.mobileMenu').classList.toggle('showMenu')
})

document.querySelector('.registerLink').addEventListener('click', () => {
    document.querySelector('#containerForm').classList.add('active')
})

document.querySelector('.loginLink').addEventListener('click', () => {
    document.querySelector('#containerForm').classList.remove('active')
})