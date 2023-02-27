const mobileMenu = document.querySelector('.mobileMenu')
const navigation = document.querySelector('.navigation')

const registerLink = document.querySelector('.registerLink')
const containerForm = document.querySelector('#containerForm')

const loginLink = document.querySelector('.loginLink')
const headerInput = document.querySelector('header input')

const conteinerLoginRegister = document.querySelector('#conteinerLoginRegister')
const background = document.querySelector('.background')
const iconClose = document.querySelector('.iconClose')

const faEyeLogin = document.querySelector('#fa-eye-login')
const passwordLogin = document.querySelector('#passwordLogin')
const faEyeRegister = document.querySelector('#fa-eye-register')
const passwordRegister = document.querySelector('#passwordRegister')
const faEyeConfirm = document.querySelector('#fa-eye-confirm')
const passwordConfirm = document.querySelector('#passwordConfirm')

const form = document.querySelector('form')
const usernameRegister = document.querySelector('#usernameRegister')
const labelUsernameRegister = document.querySelector('#labelUsernameRegister')
const emailRegister = document.querySelector('#emailRegister')
const labelEmailRegister = document.querySelector('#labelEmailRegister')
const labelPasswordRegister = document.querySelector('#labelPasswordRegister')
const labelPasswordConfirm = document.querySelector('#labelPasswordConfirm')




// NavBar
mobileMenu.addEventListener('click', () =>{
    navigation.classList.toggle('showMenu')
    mobileMenu.classList.toggle('showMenu')
})

// Switch Login/Register
registerLink.addEventListener('click', () => {
    containerForm.classList.add('active')
})

loginLink.addEventListener('click', () => {
    containerForm.classList.remove('active')
})

// Button Login

headerInput.addEventListener('click', () =>{
    conteinerLoginRegister.classList.add('activePopup')
    background.classList.add('activePopup')
})

iconClose.addEventListener('click', () =>{
    conteinerLoginRegister.classList.remove('activePopup')
    background.classList.remove('activePopup')
})

// View Password

faEyeLogin.addEventListener('click', () => {
    if (passwordLogin.type === 'password'){
        passwordLogin.setAttribute('type', 'text')
        faEyeLogin.className = 'fa-solid fa-eye-slash'

    } else {
        passwordLogin.setAttribute('type', 'password')
        faEyeLogin.className = 'fa-solid fa-eye'
    } 
})

faEyeRegister.addEventListener('click', () => {
    if (passwordRegister.type === 'password'){
        passwordRegister.setAttribute('type', 'text')
        faEyeRegister.className = 'fa-solid fa-eye-slash'

    } else {
        passwordRegister.setAttribute('type', 'password')
        faEyeRegister.className = 'fa-solid fa-eye'
    } 
})

faEyeConfirm.addEventListener('click', () => {
    if (passwordConfirm.type === 'password'){
        passwordConfirm.setAttribute('type', 'text')
        faEyeConfirm.className = 'fa-solid fa-eye-slash'
    } else {
        passwordConfirm.setAttribute('type', 'password')
        faEyeConfirm.className = 'fa-solid fa-eye'
    } 
})

// Register Validation

// form.addEventListener('submit', (ev) => {
//     ev.preventDefault()
// })

usernameRegister.addEventListener('keyup', () => {
    if(usernameRegister.value === ''){
        usernameRegister.className = 'error'
        //pegar icon
        labelUsernameRegister.setAttribute('style', 'color:red')
    } else if(usernameRegister.value.length <= 3) {
        usernameRegister.className = 'error'
        //pegar icon
        labelUsernameRegister.setAttribute('style', 'color:red')
    } else {
        usernameRegister.className = 'sucess'
        //pegar icon    
        labelUsernameRegister.setAttribute('style', 'color:green')
    }
})

// function checkInput(){
    
// }


