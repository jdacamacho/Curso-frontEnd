class Empleado extends Persona{
    constructor(nombre,apellido,edad,idEmpleado,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = idEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + " " + this.idEmpleado + this.sueldo; 
    }
}

let e = new Empleado("Julian","Camacho",22,1002,25000);
console.log(e.toString());