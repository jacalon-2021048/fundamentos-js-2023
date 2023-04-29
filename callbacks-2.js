// DB con arrays

let empleados = [{
    id: 1,
    nombre: 'Jhonatan'
}, {
    id: 2,
    nombre: 'Pedro'
}, {
    id: 3,
    nombre: 'Alejandra'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 1500
}]

//find busca en el aray sin necesidad de recorrerlo

const getEmpleado = (id, callback) => {

    const empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe trabajador con el id ${id} en la BD`);
    } else {
        callback(null, empleadoDB)
    }

}

const getSalario = (empleado, callback) => {

    const salarioDB = salarios.find((salario) => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`El usuario con el id ${empleado.id} y de nombre ${empleado.nombre} no existe, ni tiene salario asignado`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: salarioDB.id
        })
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${salario.nombre} es de Q.${salario.salario}`)
    })
})