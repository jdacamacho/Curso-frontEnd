class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }   

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    get nombre(){
       return this._nombre;
    } 

    set nombre(nombre){
        this._nombre = nombre;
    }
}


class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    nombreCompleto(){
        return this._departamento;
    }
}

let e1 = new Empleado('Julian','Camacho','Sistemas');
