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
const formReg = document.querySelector('#formReg')
// const register = document.querySelector('#register')
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

formReg.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const inputBoxs = [...formReg.querySelectorAll('.inputBox')]
    const formValid = inputBoxs.every((inputBoxs) => inputBoxs.className === 'inputBox success')

    if(formValid){
        alert('Deu bom')
    } else {
        alert('Deu ruim!!!')
    }
})

function inputKeyup(input){
    input.addEventListener('keyup', () => {
        
    })
}

usernameRegister.addEventListener('keyup', () => {
    const inputBox = usernameRegister.parentElement
    if(usernameRegister.value === ''){
        inputBox.className = 'inputBox error'
        labelUsernameRegister.innerHTML = 'Username* <small>Requeired Name</small>'

    } else if(usernameRegister.value.length <= 3) {
        inputBox.className = 'inputBox error'
        labelUsernameRegister.innerHTML = 'Username* <small>At least 4 characters</small>'
    } else {
        inputBox.className = 'inputBox success'
        labelUsernameRegister.innerText = 'Username'
    }
})

emailRegister.addEventListener('keyup', () => {
    const inputBox = emailRegister.parentElement
    const validEmail = /\S+@\S+\.\S+/
    if(emailRegister.value === ''){
        inputBox.className = 'inputBox error'
        labelEmailRegister.innerHTML = 'Email* <small>Requeired Email</small>'

    } else if(emailRegister.value.search(validEmail) === -1) {
        inputBox.className = 'inputBox error'
        labelEmailRegister.innerHTML = 'Email* <small>Invalid email</small>'
    } else {
        inputBox.className = 'inputBox success'
        labelEmailRegister.innerHTML = 'Email'
    }
})

passwordRegister.addEventListener('keyup', () => {
    const inputBox = passwordRegister.parentElement
    if(passwordRegister.value === ''){
        inputBox.className = 'inputBox error'
        labelPasswordRegister.innerHTML = 'Password* <small>Requeired Password</small>'
    } else if(passwordRegister.value.length <= 5) {
        inputBox.className = 'inputBox error'
        labelPasswordRegister.innerHTML = 'Password* <small>At least 6 characters</small>'
    } else {
        inputBox.className = 'inputBox success'
        labelPasswordRegister.innerHTML = 'Password'
    }
})

passwordConfirm.addEventListener('keyup', () => {
    const inputBox = passwordConfirm.parentElement
    if(passwordConfirm.value === ''){
        inputBox.className = 'inputBox error'
        labelPasswordConfirm.innerHTML = 'Password* <small>Requeired Password</small>'
    } else if(passwordConfirm.value !== passwordRegister.value) {
        inputBox.className = 'inputBox error'
        labelPasswordConfirm.innerHTML = 'Password* <small>Do not match</small>'
    } else {
        inputBox.className = 'inputBox success'
        labelPasswordConfirm.innerHTML = 'Password'
    }
})









