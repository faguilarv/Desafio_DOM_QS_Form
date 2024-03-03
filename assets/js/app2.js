//declaramos las constante y referenciamos la caja y cada boton.
const caja = document.getElementById('caja');
const botones = document.querySelectorAll('[id^=btn]');
//agregamos evento click a cada uno de los botones con metodo foreach
//y nos quedamos escuchando
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        //Aqui obtenemos el color de fondo despues del click.
        const color = btn.style.backgroundColor;
        //Aqui asignamos a la caja el color escogido.
        caja.style.backgroundColor = color;
    });


});



