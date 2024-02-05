//Operador AND
let a = 5;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango")
}else{
    console.log("Fuera de rango")
}

//Operador OR
let vacaciones = true, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("Puede asistir");
}else{
    console.log("Esta ocupado")
}

//Operador ternario
let resultado = (3>2) ? "Verdadero":"Falso";
console.log(resultado)
