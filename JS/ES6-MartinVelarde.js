

// function saludar(nombre){
//     let nombre = nombre;
//     return 'Hola ' + nombre;
// }

// // Mostrar el resultado por consola
// saludar('Alejandro');

const saludar = nombre => `Hola ${nombre}`;
console.log(saludar("Martín"));

// function multiplicar(a, b){
//     const resultado = a + b;
//     return resultado;
// }

// // Mostrar el resultado por consola
// multiplicar(3, 15)

const multiplicar = (a, b) => a*b;
console.log(multiplicar(5,6));

// function crearAlumno(nombre, apellido, edad, materias){
//     let alumno = {
//         nombre: nombre,
//         apellido: apellido,
//         edad: edad,
//         materias: materias
//     }

//     return alumno;
// }
// // Mostrar el resultado por consola.
// crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])


const crearAlumno2 = (nombre, apellido, edad, materias) => {
    return {nombre, apellido, edad, materias};
};
console.log(crearAlumno2('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']));


// function devolverFecha(){
//     return 'Hoy es ';
// }

// // Mostrar el resultado por consola.
// devolverFecha('10','09','2022');

const devolverFecha = (dia, mes, year) => `Hoy es ${dia} de ${mes} del año ${year}`;
console.log(devolverFecha('10','09','2022'));



















