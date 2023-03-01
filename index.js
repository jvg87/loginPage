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

const usernameRegister = document.querySelector('#usernameRegister')
const labelUsernameRegister = document.querySelector('#labelUsernameRegister')
const emailRegister = document.querySelector('#emailRegister')
const labelEmailRegister = document.querySelector('#labelEmailRegister')
const labelPasswordRegister = document.querySelector('#labelPasswordRegister')
const labelPasswordConfirm = document.querySelector('#labelPasswordConfirm')

const emailLogin = document.querySelector('#emailLogin')
const labelEmailLogin = document.querySelector('#labelEmailLogin')
const labelPasswordLogin = document.querySelector('#labelPasswordLogin')
const formLogin = document.querySelector('#formLogin')

const boxInfo = document.querySelector('#boxInfo')
const inputInfo = document.querySelector('#inputInfo')



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

function setError(input, message){
    const inputBox = input.parentElement
    const label = inputBox.querySelector('label')
    inputBox.className = 'inputBox error'
    label.innerHTML = message
}

function setSuccess(input, message){
    const inputBox = input.parentElement
    const label = inputBox.querySelector('label')
    inputBox.className = 'inputBox success'
    label.innerText = message
}

function clearInput(input){
    const inputBox = input.parentElement
    inputBox.classList.remove('success')
    input.value = ''
}

function listSessionStorage(){
    let userList = JSON.parse(sessionStorage.getItem('userList') || '[]')
    userList.push(
        {
            usernameList: usernameRegister.value,
            emailList: emailRegister.value,
            passwordList: passwordRegister.value
        }
    )
    sessionStorage.setItem('userList', JSON.stringify(userList))
}

formReg.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const inputBoxs = [...formReg.querySelectorAll('.inputBox')]
    const formValid = inputBoxs.every((inputBoxs) => inputBoxs.className === 'inputBox success')
    
    const termsCheck = document.querySelector('#termsCheck')
    const temrChecked = termsCheck.checked
    
    if(!formValid && !temrChecked){
        alert('ERROR')
        usernameRegister.focus()
    } else if (formValid && !temrChecked) {
        alert('Check the terms')
    } else {
        alert('Successfully Registricted!!')
        listSessionStorage()
        setTimeout(() => {
            containerForm.classList.remove('active')
            clearInput(usernameRegister)
            clearInput(emailRegister)
            clearInput(passwordRegister)
            clearInput(passwordConfirm)
            termsCheck.checked = false
        }, 1000)
    }
})

usernameRegister.addEventListener('keyup', () => {
    if(usernameRegister.value === ''){
        setError(usernameRegister, 'Username* <small>Requeired Name</small>')
    } else if(usernameRegister.value.length <= 3) {
        setError(usernameRegister, 'Username* <small>At least 4 characters</small>')
    } else {
        setSuccess(usernameRegister, 'Username')
    }
})

emailRegister.addEventListener('keyup', () => {
    const validEmail = /\S+@\S+\.\S+/
    if(emailRegister.value === ''){
        setError(emailRegister, 'Email* <small>Requeired Email</small>')
    } else if(emailRegister.value.search(validEmail) === -1) {
        setError(emailRegister,'Email* <small>Invalid email</small>' )
    } else {
        setSuccess(emailRegister, 'Email')
    }
})

passwordRegister.addEventListener('keyup', () => {
    if(passwordRegister.value === ''){
        setError(passwordRegister, 'Password* <small>Requeired Password</small>')
    } else if(passwordRegister.value.length <= 5) {
        setError(passwordRegister, 'Password* <small>At least 6 characters</small>')
    } else {
        setSuccess(passwordRegister, 'Password')
    }
})

passwordConfirm.addEventListener('keyup', () => {
    if(passwordConfirm.value === ''){
        setError(passwordConfirm, 'Password* <small>Requeired Password</small>')
    } else if(passwordConfirm.value !== passwordRegister.value) {
        setError(passwordConfirm, 'Password* <small>Do not match</small>')
    } else {
        setSuccess(passwordConfirm, 'Password')
    }
})

// // Login Validation

formLogin.addEventListener('submit', (ev) => {
    ev.preventDefault()

    let userList = []
    
    let users = { 
        name: '', 
        email: '',
        password: '' 
    }
    
    userList = JSON.parse(sessionStorage.getItem('userList'))

    if (!Array.isArray(userList) && userList <= 0){
        setError(emailLogin, 'Password')
        setError(passwordLogin, 'Password')
        alert('Unregistered User')
        return   
    } 
    
    userList.map((e) => {
        if(emailLogin.value === e.emailList && passwordLogin.value === e.passwordList){
            users = {
                name: e.usernameList,
                email: e.emailList,
                password: e.passwordList
            }
        } 
    })
    if(emailLogin.value === users.email && passwordLogin.value === users.password){
        setSuccess(emailLogin, 'Email')
        setSuccess(passwordLogin, 'Email')
        alert('Connected')
        setTimeout(() => {
            conteinerLoginRegister.classList.remove('activePopup')
            background.classList.remove('activePopup')
            clearInput(emailLogin)
            clearInput(passwordLogin)
        }, 1000)
    } else {
        setError(emailLogin, 'Password')
        setError(passwordLogin, 'Password')
        alert('Different User or Password')
    }  
})





