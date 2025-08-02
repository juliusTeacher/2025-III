/* Declaración de variables */
const formulario = document.getElementById('formRegistro');
const usuario = document.getElementById('txtUsuario');
const correo = document.getElementById('txtCorreo');
const password = document.getElementById('txtPassword');
const password2 = document.getElementById('txtPassword2');

formulario.addEventListener('submit', e=>{
    e.preventDefault();
    validarInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail = email => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


/* Función para validar los inputs en el formulario */
const validarInputs = () => {
    const usuarioValue = usuario.value.trim();
    const emailValue = correo.value.trim();
    const passValue = password.value.trim();
    const pass2Value = password2.value.trim();

    if(usuarioValue === ''){
        setError(usuario, 'El usuario es obligatorio');
    }
    else{
        setSuccess(usuario);
    }

    if(emailValue === ''){
        setError(correo, 'El correo electrónico es obligatorio');
    }
    else if(!isValidEmail(emailValue)){
        setError(correo, 'Coloque un correo electrónico válido');
    }
    else{
        setSuccess(correo);
    }

    if(passValue === ''){
        setError(password, 'La contraseña es obligatoria');
    }
    else if(passValue.length < 8){
        setError(password, 'La contraseña debe ser mínimo de 8 caracteres');
    }
    else{
        setSuccess(password);
    }

    if(pass2Value === ''){
        setError(password2, 'Por favor, confirme su contraseña');
    }
    else if(pass2Value != passValue){
        setError(password2, 'No coinciden las contraseñas');
    }
    else{
        setSuccess(password2);
    }
};