// Conectamos los elementos html con el js
let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');

/* btnUsers.addEventListener('click', () =>{
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users')

    getUsers
        // Realizamos la solicitud y conversion de los datos a json
        .then(resp => resp.json())
        // Procesamos los datos recibidos (indicamos que hacer con ellos)
        .then(data => {
            // Recorremos todo el arreglo que recibimos de la peticion
            data.forEach(user => {

                // Creamos nuevos elemtos en este caso parrafos
                let parr = document.createElement('p');
                // Asignamos el valor name del arreglo a los parrafos
                parr.textContent = user.name;
                // Agregamos cada parrafo con el nombre de usuario como hijos al div del html
                divUsers.appendChild(parr);
            });
            console.log(data);
        }).catch(e => console.log(e));
        // El catch es por si la peticion es erronea
}) */

// La funcion se llama sin parentesis para solo hacer referencia a ella, con parentesis la mandas a ejecutar
 btnUsers.addEventListener('click', displayData);

// DEclaramos una funcion asincrona
async function displayData (){
    // Realizamos la peticion con el fetch y con el await hacemos que JS espere la respuesta de esa peticion
    let getUsers = await fetch ('https://jsonplaceholder.typicode.com/users');

    // Ok sirve para verificar si la peticion fue respodida correctamente
    console.log(getUsers.ok);

    let data = await getUsers.json();
    // console.log(data);
    // Recorremos todo el arreglo que recibimos de la peticion
    data.forEach(user => {

        // Creamos nuevos elemtos en este caso parrafos
        let parr = document.createElement('p');
        // Asignamos el valor name del arreglo a los parrafos
        // Toda la informacion esta en el user
        parr.textContent = `Nombre de usuario: ${user.name}. Email: ${user.email}`;
        // Agregamos cada parrafo con el nombre de usuario como hijos al div del html
        divUsers.appendChild(parr);
    });

    //  return data;
}

// Se declara otra funcion para recuperar los datos, para eso recupera el return de la fun cion principal
/* async function otraFuncion(){
    console.log(await displayData());
}

otraFuncion(); */