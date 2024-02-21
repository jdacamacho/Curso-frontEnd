let resultado = 'hola';

try{
    if((isNaN(resultado))){
        throw 'No es un numero';
    }else if(resultado === ''){
        throw 'Es cadena vacia'
    }else{
        console.log(resultado);
    }

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}