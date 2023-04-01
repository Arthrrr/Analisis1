import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import {auth} from './firebase.js'

import {showMessage} from './showMessage.js'

const signInForm = document.querySelector('#login-form');


signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['login-Email'].value;
    const password = signInForm['login-Password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials)
        const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
        modal.hide();

        signInForm.reset();

        showMessage('Bienvenido!')


    } catch(error) {
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña incorrecta", "error")
        } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error")
        } else {
            showMessage("Algo anda mal :(", "error")
        }
    }

});