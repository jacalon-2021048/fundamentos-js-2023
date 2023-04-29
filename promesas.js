// Promesas

//DB con arrays
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

// Funcion obtener empleados por id

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe trabajador con el id ${id} en la BD`);
        } else {
            resolve(empleadoDB);
        }

    })

}


const getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        const salarioDB = salarios.find((salario) => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No existe trabajador con el id ${id} en la BD`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: salarioDB.id
            });
        }

    })

}

getEmpleado(2)
    .then(e => {
        return getSalario(e);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de: ${resp.salario}`);

    })
    .catch(err => {
        console.log(err)
    })