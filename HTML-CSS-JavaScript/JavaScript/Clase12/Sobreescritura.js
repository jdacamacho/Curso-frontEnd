class empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return this._nombre + " " + this._sueldo ;
    }
}

class gerente extends empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return this._departamento + " " + super.obtenerDetalles() ;
    }
}
let e = new empleado("Julian",30000);
let g = new gerente("Pepe",25000,"Sistemas");
console.log(g.obtenerDetalles());

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

imprimir(g);