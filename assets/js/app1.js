document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.querySelector('#nombre').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;

    let error = false; // Flag para seguir el estado de la validación

    // Limpiar errores previos
    document.querySelector('.errorNombre').textContent = '';
    document.querySelector('.errorAsunto').textContent = '';
    document.querySelector('.errorMensaje').textContent = '';

    // Validación del nombre
    if (nombre.trim() === '') {
        document.querySelector('.errorNombre').textContent = 'El nombre es requerido.';
        error = true;
    } else if (!/^[a-zA-Z]+$/.test(nombre)) {
        document.querySelector('.errorNombre').textContent = 'El nombre debe contener solo letras aZ-Az.';
        error = true;
    }

    // Validación del asunto
    if (asunto.trim() === '') {
        document.querySelector('.errorAsunto').textContent = 'El asunto es requerido.';
        error = true;
    } else if (!/^[a-zA-Z]+$/.test(asunto)) {
        document.querySelector('.errorAsunto').textContent = 'El asunto debe contener solo letras aZ-Az.';
        error = true;
    }

    // Validación del mensaje
    if (mensaje.trim() === '') {
        document.querySelector('.errorMensaje').textContent = 'El mensaje es requerido.';
        error = true;
    } else if (!/^[a-zA-Z]+$/.test(mensaje)) {
        document.querySelector('.errorMensaje').textContent = 'El mensaje debe contener solo letras aZ-Az.';
        error = true;
    }

    //si el error no aparece se envia el form con exito y se resetea el form en blanco.
    if (!error) {
        console.log('Formulario enviado');

        formulario.reset();
        document.querySelector('.resultado').textContent = 'Mensaje enviado con éxito!';
    }
}

