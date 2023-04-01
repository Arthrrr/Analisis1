import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import {auth} from './firebase.js'

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const user = signupForm['userName'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value




    console.log(user, email, password)

    try {
     const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
     console.log(userCredentials)

     const signupModal = document.querySelector('#registroModal')

    } catch (error) {
        console.log(error);

    }
})