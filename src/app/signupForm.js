const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = signupForm['userName'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    const r = "salsa";


    console.log(user, email, password)
})