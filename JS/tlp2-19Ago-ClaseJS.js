/* 
1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO


*/


function tratamientoNros(x,z) {
    let resultado = 0;
    if (x < z) {
        resultado = z/x;
        return resultado;
    } else {
        resultado = z*x;
        return resultado;
    }
}

let resultadoTotal = tratamientoNros(6,6)
console.log(resultadoTotal);



/*

2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
*/

function tipoArgumento(a){
	return typeof(a)
}
let tipoDeArgumento = tipoArgumento(true);
console.log(tipoDeArgumento);






/*
3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN
*/
function operacionesNumeros(a,b,c,d,e,f){
    let suma = a + b;
    let resta = suma - c;
    let multiplicacionYDivision = (resta * d)/e;
    let potencia = Math.pow(multiplicacionYDivision, f);
	return potencia;
}
let resultadoOperaciones = operacionesNumeros(5,6,8,6,9,5)
console.log(resultadoOperaciones);


/*
4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
*/
const arrayMartin = ["Anabella", "Andrea", "Rocío", "Verónica", "Maru", "Gabriela1", "Giovanna", "Meli", "Bárbara", "Gabriela2", "Maga"];
function tratamientoArray(array){
    for (let index = 0; index < 3; index++) {
        array.pop()        
    }
    return array;
}

const newArray = tratamientoArray(arrayMartin);
console.log(newArray);

/*
5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
*/

const arrayMartin2 = ["Anabella", "Andrea", "Rocío", "Verónica", "Maru", "Gabriela1", "Giovanna", "Meli", "Bárbara", "Gabriela2", "Maga"];
function tratamientoArray2(array){
    return array.sort();
}
const newArray2 = tratamientoArray2(arrayMartin2);
console.log(newArray2);


/*
6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO
*/

const arrayMartin3 = [5, "Anabella", "Andrea", 5, "Rocío", "Verónica", 5, "Maru", "Gabriela", "Giovanna", 5, "Meli", "Bárbara", "Gabriela", "Maga"];


function tratamientoArray3(array, valor){
    let arrAux1 = [];
    array.filter((elem) => {
    if (elem !== valor){
        arrAux1.push(elem)
    }
    });
    return arrAux1;
}

console.log(tratamientoArray3(arrayMartin3, "Gabriela"));

/**UNA FORMA */
// function tratamientoArray3(array, valor) {
//     array.filter(function (elemento) {
//         let indice = array.indexOf(elemento);
//         if (elemento === valor){
//             array.splice(indice, 1);
//         }
//     })
//     return array
// }

// const filtrado = tratamientoArray3(arrayMartin3, 5);
// console.log(filtrado);

/**OTRA FORMA */
// function tratamientoArray3(array, valor) {
//     array.filter(function (elemento, indice) {
//         if (elemento === valor){
//             array.splice(indice, 1);
//         }
//     })
//     return array
// }

// const filtrado = tratamientoArray3(arrayMartin3, "Gabriela");
// console.log(filtrado);

/*
7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.
*/


const arrayMartin4 = [1,2,3,4,5,6,7,8,9];
function tratamientoArray4(array){
    return array.reduce(function (valorPrevio, valorActual) {
        return valorPrevio + valorActual;
    });
}
const newArray4 = tratamientoArray4(arrayMartin4);
console.log(newArray4);

const arrayMartin5 = [1,2,3,4,5,6,7,8,9];
function tratamientoArray5(array){    
    let suma = array.reduce(function (valorPrevio, valorActual) {
        return valorPrevio + valorActual;
    });
    let longitudArray = array.length
    let promedio = suma/longitudArray;
    return promedio
}
const newArray5 = tratamientoArray5(arrayMartin5);
console.log(newArray5);


/*
8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO
*/


const objetoMartin = {nombre: "Martin", apellido: "Velarde", edad: 30};
function tratamienoObjetos(objeto, str){
    if (str in objeto) {
        return objeto[str]
    }
}
const valorDePropiedad = tratamienoObjetos(objetoMartin, "edad");
console.log(valorDePropiedad);

/*
Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
	Retorna 'Rosa'
*/

/*
9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES.
*/


const objetoMartin1 = {nombre: "Martin", apellido: "Velarde", edad: 30, prop1: 1, prop2: 2};

function tratamienoObjetos2(objeto){
    let suma = 0;
    for (key in objeto) {
        let tipoDato = objeto[key];
       
        if (typeof(tipoDato) == "number") {
            suma = suma + objeto[key];
        }
    }
    return suma;
}
const sumaValoresObjeto = tratamienoObjetos2(objetoMartin1);
console.log(sumaValoresObjeto);
