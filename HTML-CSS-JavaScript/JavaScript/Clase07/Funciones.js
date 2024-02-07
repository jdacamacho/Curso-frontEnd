function miFuncion(a , b){
    console.log(arguments.length)
    return a + b;
}

let result = miFuncion(1,5);
console.log(result);

//Funciones de tipo expresión
let sumar = function (a,b){
    return a + b
};

resultado = sumar(1,2);
console.log(resultado);

//Funciones Self-invoking
(function(){
    console.log('Ejecutando la función');
})();

//Funciones flecha

const sumarTipoFlecha = (a,b) => a + b;
suma = sumarTipoFlecha(3,5);
console.log(suma);

let sumaParametros = function(a , b ,c ,d ,e ,f){
    let suma = 0;
    for(let i = 0 ; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(sumaParametros(1,2,3,4,5,6));