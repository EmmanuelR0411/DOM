//De esta forma accedemos al document y 
//podemos buscar los elemntos con la clase que le indiquemos
//Por medio del textCOntent accedemos a lo que esta dentro de la clase, en este caso el parrafo
//Con el [0] hacemos referencia a la posicion del elemnto que se quiere cambiar e innerHTML sirve para cambiar el contenido
/*document.getElementsByClassName('parrafo')[0].innerHTML = "Parrafo cambiado dinamicamente";*/

/*var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);*/

/*Los id deben de ser unicos y debido a esto, al escribir la instruccion no debemos mencionar
la posicion del elemento*/
/*document.getElementById('parrafo2').innerHTML = 'Soy el parrafo 2';*/

//Forma mas reciente para DOME, equivalencia de , solo afecta a un elemento
//queryselectorall afecta a varios y entrega un arreglo como el getelement
document.querySelector('.parrafo').textContent = 'Nuevo texto de parrafo';
document.querySelectorAll('.parrafo')[1].textContent = 'All';
//Si se pone un # haces referencia a un id
document.querySelector('#parrafo3').textContent = 'Referencia con id';

var parrafo1 = document.querySelector('#parrafo3');
var parrafo2 = document.querySelectorAll('.parrafo')[2];

console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);