import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import {auth} from './firebase.js'
import { showMessage} from './showMessage.js'

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

     //cerrar el modal de registro
     const signupModal = document.querySelector('#registroModal');
     const modal = bootstrap.Modal.getInstance(signupModal);
     modal.hide();

     showMessage("Bienvenido " + userCredentials.user.email, "success")



    } catch (error) {
        console.log(error);
        console.log()

        if (error.code === 'auth/email-already-in-use'){
            showMessage('El correo ya esta registrado!')
        } else if (error.code === 'auth/invalid-email'){
            showMessage('Correo invalido')
        } else if (error.code === 'auth/weak-password'){
            showMessage('La contraseña es muy débil')
        } else if (error.code) {
            showMessage('Algo esta mal :(')
        }

    }
})