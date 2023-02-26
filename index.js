// NavBar
document.querySelector('.mobileMenu').addEventListener('click', () =>{
    document.querySelector('.navigation').classList.toggle('showMenu')
    document.querySelector('.mobileMenu').classList.toggle('showMenu')
})

// Switch Login/Register
document.querySelector('.registerLink').addEventListener('click', () => {
    document.querySelector('#containerForm').classList.add('active')
})

document.querySelector('.loginLink').addEventListener('click', () => {
    document.querySelector('#containerForm').classList.remove('active')
})

// Button Login

document.querySelector('header input').addEventListener('click', () =>{
    document.querySelector('#conteinerLoginRegister').classList.add('activePopup')
    document.querySelector('.background').classList.add('activePopup')
})

document.querySelector('.iconClose').addEventListener('click', () =>{
    document.querySelector('#conteinerLoginRegister').classList.remove('activePopup')
    document.querySelector('.background').classList.remove('activePopup')
})

// View Password

document.querySelector('#fa-eye-login').addEventListener('click' () => {
    
})

