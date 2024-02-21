/*let detener = (numero,iteracion) =>{
    if(numero === 10){
        console.log("Numero: " + numero + " iteracion: " + iteracion);
        return numero;
    }else{
        console.log("Numero: " + numero + " iteracion: " + iteracion);
        iteracion+=1;
        numero+=1;
        return detener(numero,iteracion);
    }
}

console.log(detener(1,0));*/


//CallBack
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcion){
    let resultado = op1 + op2;
    funcion(resultado);
}

sumar(2,4,imprimir);


//SetTimeOut

function miFuncionCallBack(){
    console.log("Hola");
}

setTimeout(miFuncionCallBack,3000);


//SetInterval

let reloj = () =>{
    let fecha = new Date();
    console.log(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

setInterval(reloj,2000);
