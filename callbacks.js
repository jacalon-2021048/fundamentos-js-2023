// Callbacks
// Funcion que se ejecuta en un tiempo estimado
// es mandar un funcion dentro de otra

// setTimeout(function () {
//     console.log('Hola Mundo')
// }, 5000);

// setTimeout(() => {
//     console.log('Hola Kinal, con funcion flecha')
// }, 2000)

const getUsuarioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Victor'
    }

    if (id === 20) {
        callback(`El usuario con id: ${id}, no existe en la base de datos`)
    } else {
        callback(null, usuario)
    }


}


getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err)
    } else {
        console.log('El usuario esta en BD', usuario.nombre)
    }
})