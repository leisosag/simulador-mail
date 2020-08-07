// VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBTN = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBTN = document.getElementById('resetBtn');

// EVENT LISTENERS
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    formularioEnviar.addEventListener('submit', enviarEmail);
    resetBTN.addEventListener('click', resetForm);
}

// FUNCIONES
function inicioApp() {
    enviarBTN.disabled = true;
}

function validarCampo() {
    validarLongitud(this);
    if(this.type === 'email') {
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            enviarBTN.disabled = false;
        }
    }
}

// cuando se envia el correo
function enviarEmail(e) {
    e.preventDefault();
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 3000)
    }, 1000);
}

// verifica la longitud de texto de los campos
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// validar email
function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// resetear form
function resetForm(e) {
    e.preventDefault();
    formularioEnviar.reset();
}