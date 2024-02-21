let promesa = new Promise((resolve,rejected) =>{
    let bandera = false;
    if(bandera){
        resolve('Resolvio correcto');
    }else{
        rejected('Error');
    }
});

/*promesa.then(
    valor => console.log(valor),
).catch(
    error => console.log(error)
);*/

//Async

async function miFuncionConPromesa(){
    return "saludos con promesa y async";
}

//miFuncionConPromesa().then(valor => console.log(valor));


async function funcionConPromesaAwwait(){
    let miPromesa = new Promise(resolve =>{
        resolve("Promesa con await");
    })

    console.log(await miPromesa);
}

//funcionConPromesaAwwait();


async function funcionConPromesaTimeOut() {
    console.log("Inicio");
    let miPromesa = new Promise(resolve => {
        setTimeout(()=> resolve('Promesa con await'), 3000);
    });
    console.log( await miPromesa );
    console.log("Fin");
}

funcionConPromesaTimeOut();