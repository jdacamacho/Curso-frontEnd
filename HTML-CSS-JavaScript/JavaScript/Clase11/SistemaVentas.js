class Producto{
    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get getIdProducto(){
        return this._idProducto;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    get getPrecio(){
        return this._precio;
    }

    set setPrecio(precio){
        this._precio = precio;
    }

    toString(){
        return this.getIdProducto + " " + 
                this.getNombre + " " +
                this.getPrecio; 
    }
}

class Orden{
    static contadorOrdenes = 0 ;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            this._contadorProductosAgregados+=1;
        }else{
            console.log("No se pueden agregar mas productos.")
        }
    }

    calcularVenta(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta+= producto.getPrecio;
        }
        console.log("El total de la venta es: " + totalVenta);
    }

    mostrarOrden(){
        console.log("Total de productos: " + this._contadorProductosAgregados);
        for(let producto of this._productos){
            console.log(producto.toString());
        }
    }
}

let p1 = new Producto("Helado",2500);
let p2 = new Producto("Papas",2000);
let p3 = new Producto("Pizza",8000);

let o = new Orden();

o.agregarProducto(p1);
o.agregarProducto(p2);
o.agregarProducto(p3);

o.mostrarOrden();
o.calcularVenta();

