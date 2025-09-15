const formulario = document.getElementById('formRegistro');
const nombre = document.getElementById('txtNombre');
const correo = document.getElementById('txtCorreo');
const comentarios = document.getElementById('txtComentario');

/* Evento para que el usuario de clic en el botón ENVIAR */
formulario.addEventListener('submit', e=>{
    e.preventDefault();
    validarInputs();
});

/* Función para establecer el error del usuario */
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

/* Función para establecer el éxito del usuario */
const setSuccess = element=>{
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

/* Función para validar los inputs del formulario */
const validarInputs = () =>{
    const nombreValue = nombre.value.trim();
    const emailValue = correo.value.trim();
    const commentValue = comentarios.value.trim();

    if(nombreValue === ''){
        setError(nombre, 'Digite su nombre completo');
    }
    else{
        setSuccess(nombre)
    }

    if(emailValue === ''){
        setError(correo, 'Digite su correo electrónico');
    }
    else if(!isValidEmail(emailValue)){
        setError(correo, 'Especifique un correo válido');
    }
    else{
        setSuccess(correo);
    }

    if(commentValue === ''){
        setError(comentarios, 'Especifique su comentario');
    }
    else{
        setSuccess(comentarios);
    }
}