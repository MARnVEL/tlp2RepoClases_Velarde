
// Promesa almacenada en una constante
const promesa = () => {
    return new Promise((resolve, reject) => {
    if( 10 === 11) resolve('Los valores son iguales');
    else reject('Los valores son distintos');
    } )
};

console.log(promesa());

promesa()
.then(res => console.log(res))
.catch(err => console.log(err))









