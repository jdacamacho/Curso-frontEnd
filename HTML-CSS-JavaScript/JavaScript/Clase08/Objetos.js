function auto(nombre,marca,modelo){
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.informacion = function(){
        return 'Hola mundo';
    }
}

let vehiculo = new auto("Optra","Chevrolet",2010);
console.log(JSON.stringify(vehiculo));

let persona = {
    nombre : 'Julian',
    apellido : 'Camacho',
    email : 'jdacamacho@unicauca.edu.co',
    edad : 22,
    get nombreCompleto(){
        return this.nombre + ' '  + this.apellido;
    }
}

let personaString = JSON.stringify(persona);
console.log(personaString);


let p1 = {
    nombre : 'Julian',
    apellido : 'Camacho',
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}

let p2 = {
    nombre : 'Laura',
    apellido : 'Recalde',
}

console.log(p1.nombreCompleto.call(p2));

