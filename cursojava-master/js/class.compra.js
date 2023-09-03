class Compra {

    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {

        if (carrito.length > 0) {
            return this.carrito.reduce((acc, prenda)=> acc + figura.precio, 0).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }
    confirmarCompra() {

        if (this.obtenerSubtotal() !== 'Error inesperado') {
            return `✅ Confirmamos el pago de $ ${this.obtenerSubtotal()}. \n gracias por tu compra!`
        } else {
            return `⚠ Error en la transacción.`
        }
    }
}