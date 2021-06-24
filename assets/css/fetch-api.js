// Fetch API nos perimite hacer peticiones http y así obtener informacion
/* 
Utilizaremos el concepto de "promesas", va a recuperar un dato y 
se quedara esperando esa respuesta (Se ejecutara de manera asincrona)
En pocas palabras no se va a ejecutar de manera inmediata sino que va a esprar la respuesta
del servidor
*/


let button = document.querySelector('#button');
button.addEventListener('click', () => {

    // Realizamos la consulta al API
    let apiFetch = fetch(' https://api.thecatapi.com/v1/images/search');
    // En el fetch se coloca la url a la que se le realizara la solicitud y enviara esos datos (promesa)


    // Aqui hacemos el apiFecht y hacemos la peticion (Por defecto trabaja con formato get)
    apiFetch
    // Aqui transforamos la respuesta obtenida en formato JSON (Nuevamente nos da una promesa)
        .then(resp => resp.json())
        .then(data => {
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;
        console.log(data[0].url);

        // El catch es por si la promesa no se cumple
    }).catch(e => console.log(e))

});