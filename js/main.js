

let nombre = prompt("Hola!! dime tu nombre");

alert ("Hola " + nombre + " bienvenido :)");

/*const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.btn-menu');


ham.addEventListener('click',function() {
    enlaces.classList.toggle('activado')
});*/

window.addEventListener('load', iniciar, false);

function iniciar() {
    var imagen = document.getElementById('foto'), original = imagen.src;

    imagen.addEventListener('mouseover', function(){
        this.src = "img/foto2.jpg";  
    }, false);

    imagen.addEventListener('mouseout', function(){
        this.src = original;
    }, false); 
}