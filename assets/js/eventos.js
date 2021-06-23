// De esta forma hacemos referencia al input (enlazamos la variable con el html en este caso el input)
let nameInput = document.querySelector('#nameInput');

// Agregamos un evento, el evento change detecta los cambios sobre el formulario
// Se pone el evento y seguido una funcion anonima, en la funcion se agrega lo que quieres que pase cada que suceda el evento
// keyup detecta lo que se escribe (Se dispara cada que se suelta una tecla)
// keydown, este evento se dispara justo cuando se presiona la tecla
nameInput.addEventListener('keyup', function(event){
    // El event hace referencia al elemento que recibe, es como si recibiera el nameInput
    // value es para extraer el valor que esta por dentro
    console.log(nameInput.value);

    // Hace exactamento lo mismo que el de arriba 
    // console.log(event.target.value);
});

let button = document.querySelector('#button');

// Creamos el evento pero con una funcion de flecha
button.addEventListener('click', event =>{
    let nameHader = document.querySelector('#nameH');
    nameHader.textContent = nameInput.value;

})

/* // El evento se dispara cuando el documento esta cargando
window.onload = function (){
 
} */
