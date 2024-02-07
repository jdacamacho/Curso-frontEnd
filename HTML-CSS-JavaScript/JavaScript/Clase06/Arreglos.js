//let autos  = new Array('BMW','Mercedes Benz','Volvo');

const autos = ['BMW','Mercedes Benz','Volvo'];

for(let i = 0 ; i<autos.length ; i++){
    console.log((i+1) + ": " + autos[i]);
}

autos.push('Optra');
console.log(autos[3])

console.log(Array.isArray(autos));

