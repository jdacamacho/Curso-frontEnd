/*
Ejemplos de tipos de datos en javaScript
*/ 

//Tipo de dato String
var nombre = "Julian";
console.log(nombre);

//Tipo de dato number
var numero = 1234567;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Julian",
    apellido: "Camacho",
    telefono: "3147242572"
}
console.log(objeto)

//Tipo booleano
var bandera = true;
console.log(bandera)


//Tipo de dato function
function miFuncion(){
    
}
console.log(miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo de dato clase
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo de dato Undefined
var x = undefined;
console.log(x)

//Tipo de dato null
var y = null;
console.log(y);

var autos = ["BMW",'Audi','Mazda'];
console.log(autos);