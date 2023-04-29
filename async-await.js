// Async - Await

// Al agregarle async a la funcion devuelve una promesa

// let getNombre = async() => {
//     return 'Jhonatan Acalon';
// }

// getNombre().then( () => {
//     console.log('Todo bien')
// })



//Promesa

let getNombre = () => {

    return new Promise( (resolve, reject) => {
 
        setTimeout( () => {
            resolve('Jhonatan')
        },3000);

    });

};


let saludar = async() => {
    
    let saludo = await getNombre();

    return `Hola ${saludo}`

};


saludar().then( (msg) => {
    console.log(`Buenos dias, saludos cordiales... ${msg}`)
})