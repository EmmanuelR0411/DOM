// DOM permite conectar el  JS con el HTML y permite hacer modificaciones en tiempo real
// # es para id 
// . es para clase
// De esta forma accedemos al contenido y apuntamos al id de subtitle
let subtitle = document.querySelector('#subtitle');
// querySElector es para seleccionar un elemento en el HTML

console.log(subtitle);
//Así se puede obtener lo que esta escrito en el subtitulo
console.log(subtitle.textContent);

// Utilizamos textContent para cambiar el valor interno del subtitle
subtitle.textContent = 'Nuevo valor';

// De esta forma se agrega una nueva clase al elemento al que se apunta
subtitle.classList.add('red');

// Así como se agregan clases tambien se pueden eliminar
subtitle.classList.remove('red');

// Se crea arreglo de animales
const animales = ['Perro', 'Gato', 'Mapache', 'Raton','Zorro', 'Pez', 'Leopardo'];
// SE hace referencia al id list que en este caso es una lista que creamos en HTML
const list = document.querySelector('#list');

animales.push('Toro');

// forEach se pueden utilizar en arreglos, objetos, ya que recorre todos los elementos
animales.forEach(function(animal, index){
    // createElement sirve para crear elementos, en este caso creara etiquetas li dentro de nuestra lista
    let item = document.createElement('li');
    // Se asigna el valor del animal (el argumento que pasa del arreglo) al nuevo elemento creado
    item.textContent = `${index} ${animal}`;
    // index es el numero del elemento que ocupa cada uno
    // appendChild sirve para agregar un hijo, en este caso el item que es un li
    list.appendChild(item);
});

//Equivalente a lo de arriba pero con funcion de flecha 
/*  
animales.forEach(animal => {
    // createElement sirve para crear elementos, en este caso creara etiquetas li dentro de nuestra lista
    let item = document.createElement('li');
    item.textContent = animal;
    // appendChild sirve para agregar un hijo, en este caso el item que es un li
    list.appendChild(item);
}); */





