class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return "Raton:" + this._tipoEntrada + " " + this._marca;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;

    }

    toString(){
        return "Teclado:" + this._tipoEntrada + " " + this._marca;
    }
}

class Monitor{
    static contadorMonitor = 0;

    constructor(marca,Tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = Tamaño;
    }

    toString(){
        return "Monitor:" + this._marca + " " + this._tamaño;
    }
}

