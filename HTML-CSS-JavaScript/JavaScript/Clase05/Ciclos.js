let contador = 0;
/*
while(contador < 3){
    console.log(contador);
    contador++;
}
*/

/*
do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/

for(let i = 0 ; i <= 10 ; i++){
    if(i % 2 !== 0){
        continue;
    }    
    console.log(i);
}


