//Desestructuracion
//Creando un objeto
let superHeroe = {
    nombre: 'Spiderman',
    nombreReal: 'Peter Parker',
    poder: 'Sentido aracnido',
    getNombre: function () {
        return `El superheroe es ${this.nombre} y su poder es: ${this.poder}`;
    }
}

// let nombre = superHeroe.nombre;
// let real = superHeroe.nombreReal;
// let poder = superHeroe.poder;

// console.log(`El heroe es: ${nombre} y su poder es ${poder} en la nueva pelicula se descubrio su nombre real y es: ${real}`)


//DESESTRUCTURACION
const { nombre, nombreReal, poder } = superHeroe;

console.log(nombre, nombreReal, poder);

// function imprimirHeroe( nombre, nombreReal, poder ) {
//     console.log(nombre, nombreReal, poder);
// }

// //const listaHeroes = ['Spiderman', 'Iron Man']

// imprimirHeroe('Deadpool', 'Wade', 'Regeneracion');