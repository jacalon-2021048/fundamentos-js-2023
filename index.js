// Async - await

//db
//ctrl + a slecciona todo

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

const getEmpleado = async (id) => {

    try {
        const empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            throw new Error(`No existe trabajador con el id ${id} en la BD`);
        } else {
            return (empleadoDB);
        }
    } catch (error) {
        return error;
    }

}

const getSalario = async (empleado) => {

    const salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe salario para el trabajador con el id ${empleado.id} en la BD`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }


}

let getInfo = async (id) => {

    try {
        let trabajador = await getEmpleado(id);
        let rest = await getSalario(trabajador);

        return `El trabajador ${rest.nombre}, tiene un salario de ${rest.salario}`
    } catch (error) {

    }


}

getInfo(1).then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
})