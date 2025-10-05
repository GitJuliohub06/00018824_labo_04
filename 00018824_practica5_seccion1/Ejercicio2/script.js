const carrito = {
    productos: [{
        nombre: 'Camisa',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'Chocolate',
        unidades: 2,
        precio: 1.5,
    }
    ],
    getPrecioTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].unidades * this.productos[i].precio;
        }
        return total;
    }
}
console.log(carrito);
console.log(`El precio total del carrito es: $${carrito.getPrecioTotal()}`);

