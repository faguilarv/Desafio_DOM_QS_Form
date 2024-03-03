document.addEventListener('DOMContentLoaded', function () {
    const valor1 = document.getElementById('valor1')
    const valor2 = document.getElementById('valor2')
    const botonSumar = document.getElementById('btn-sumar')
    const botonRestar = document.getElementById('btn-restar')
    const resultadoFinal = document.querySelector('.resultado')

    //creamos el evento Sumar
    botonSumar.addEventListener('click', function () {
        const suma = Number(valor1.value) + Number(valor2.value)
        resultadoFinal.textContent = suma

    })

    //Creamos el evento Restar
    botonRestar.addEventListener('click', function () {
        const resta = Number(valor1.value) - Number(valor2.value)
        if (resta < 0) {
            // segun requerimiento mostrar 0 si el resultado es negativo
            resultadoFinal.textContent = 0
        } else {
            resultadoFinal.textContent = resta
        }

    })
})
