class Orden{
    static contadorOrdenes=0;
    static MAX_PRODUCTS = 5;

    constructor(){
        this.idOrden = Orden.contadorOrdenes;
        this.productos =[];
        this.contadorProductosAgregados;
    
    agregarProducto(producto){
        this.productos.push(producto);
        this.contadorProductosAgregados++;
    };
    calcularTotal(){
        let precio=0;
        for (elment of this.productos){

        };
    };
    toString(){
        return `id: ${this.idOrden}\n`+
        `id de orden: ${this.idOrden}\n`+
        `todos los productos: ${this.contadorProductosAgregados}\n`
        ;
    };
};

/*responsabilidades
-- crear objetos de tipo orden
-- Administrar los productos de una orden
*/

idProducto
nombre
precio
static contadorProductos
producto()
producto(nombre,precio)
idProducto
get Nombre
set Nombre
get Precio
set Precio
toString()
/*responsabilidades
-- crear objetos de tipo producto
*/

function ventasTest(){

};