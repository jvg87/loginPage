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
const nameReg = document.querySelector('.nameReg')
const emailReg = document.querySelector('.emailReg')
const passReg = document.querySelector('.passReg')
const passConf = document.querySelector('.passConf')







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
        labelUsernameRegister.setAttribute('style', 'color:red')
        nameReg.className = 'icon nameReg error'

    } else if(usernameRegister.value.length <= 3) {
        usernameRegister.className = 'error'
        labelUsernameRegister.setAttribute('style', 'color:red')
        nameReg.className = 'icon nameReg error'
    } else {
        usernameRegister.className = 'success'
        labelUsernameRegister.setAttribute('style', 'color:green')
        nameReg.className = 'icon nameReg success'
    }
})

emailRegister.addEventListener('keyup', () => {
    if(emailRegister.value === ''){
        emailRegister.className = 'error'
        labelEmailRegister.setAttribute('style', 'color:red')
        emailReg.className = 'icon emailReg error'

    } else if(emailRegister.value.length <= 3) {
        emailRegister.className = 'error'
        labelEmailRegister.setAttribute('style', 'color:red')
        emailReg.className = 'icon emailReg error'
    } else {
        emailRegister.className = 'success'
        labelEmailRegister.setAttribute('style', 'color:green')
        emailReg.className = 'icon emailReg success'
    }
})

passwordRegister.addEventListener('keyup', () => {
    if(passwordRegister.value === ''){
        passwordRegister.className = 'error'
        labelPasswordRegister.setAttribute('style', 'color:red')
        passReg.className = 'icon passReg error'

    } else if(passwordRegister.value.length <= 3) {
        passwordRegister.className = 'error'
        labelPasswordRegister.setAttribute('style', 'color:red')
        passReg.className = 'icon passReg error'
    } else {
        passwordRegister.className = 'success'
        labelPasswordRegister.setAttribute('style', 'color:green')
        passReg.className = 'icon passReg success'
    }
})

passwordConfirm.addEventListener('keyup', () => {
    if(passwordConfirm.value === ''){
        passwordConfirm.className = 'error'
        labelPasswordConfirm.setAttribute('style', 'color:red')
        passConf.className = 'icon passConf error'

    } else if(passwordConfirm.value.length <= 3) {
        passwordConfirm.className = 'error'
        labelPasswordConfirm.setAttribute('style', 'color:red')
        passConf.className = 'icon passConf error'
    } else {
        passwordConfirm.className = 'success'
        labelPasswordConfirm.setAttribute('style', 'color:green')
        passConf.className = 'icon passConf success'
    }
})



// function checkInput(){
    
// }


