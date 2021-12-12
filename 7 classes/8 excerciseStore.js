console.clear()
Array.prototype.random = function (length) {
    // here return an element from this
    return this[Math.floor((Math.random()*length))];
}


class Orden{
    static contadorOrdenes=0;
    static MAX_PRODUCTS=5;
    productos =[];
    contadorProductosAgregados=0;
    idOrden=0;

    constructor(){
        this.idOrden = Orden.contadorOrdenes++;
    };
    agregarProducto(producto){
        this.productos.push(producto);
        this.contadorProductosAgregados++;
    };
    calcularTotal(){
        let precio=0;
        for (let product of this.productos){
            precio+=product.precio;
        };
        return precio;
    };
    toString(){
        let init=0;
        let stringToReturn = "";
        stringToReturn+=`\nOrder Id: ${this.idOrden}\nProductos en orden:${this.contadorProductosAgregados}`;
        for (const product of this.productos){
            stringToReturn+=product.toString();
        };
        stringToReturn +=`\nPrecio Total:${this.calcularTotal()}`;

        return stringToReturn;
    };
};

/*responsabilidades
-- crear objetos de tipo orden
-- Administrar los productos de una orden
*/
class Producto{
    static contadorObjProductos=0;
    _idProducto;
    _nombre;
    _precio;
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = Producto.contadorObjProductos++;
    };
    get id(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    };
    set nombre(nombre){
        this._nombre = nombre;
    };
    get precio(){
        return this._precio;
    };
    set precio(precio){
        this._precio = precio;
    };
    toString(){
        return (
            `\n   Id producto: ${this.id}`+
            `\n   Nombre: ${this.nombre}`+
            `\n   Precio: ${this.precio}`
            );
    };
};

/*responsabilidades
-- crear objetos de tipo producto
*/

function ventasTest(){
    let myOrders = [];
    let productName = ["frijol","maiz","aceite","atun","cocaina","marihuana","anfetamina","crack"];
    let products =[];
    let prices = [1500,2000,1200,1202,1292];

    for (let index = 0; index < productName.length; index++) {
        products.push(
            new Producto(
                productName.random(productName.length),
                prices.random(prices.length)
            )
        );
    }
//
    for (index = 0; index < 5; index++) {
        myOrders.push(new Orden());
        for(let index2=0; index2<5; index2++){
            myOrders[index].agregarProducto(products.random(products.length));
        };
    };
// 
    for (index = 0; index < myOrders.length; index++) {
        console.log(
            myOrders[index].toString()
        );
    };

};

ventasTest()