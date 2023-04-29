let nombre = 'Jhonatan';
let apellido = 'Acalon';

//Concatenacion al estilo Java
console.log('Hola mi nombre es ' + nombre + ' y mi apellido es ' + apellido);

//Concatenacion al estilo JavaScript
//Con templates literales en JavaScript
console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`)


function getNombreCompleto() {
    return `Nombre: ${nombre} ${apellido}`
}

console.log(`El nombre del alumno es: ${getNombreCompleto()}`)