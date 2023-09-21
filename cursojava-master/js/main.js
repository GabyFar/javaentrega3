
const url = "./data.js"

fetch(url)
.then(res => res.json())
.then(data => mostrarProductos.log(data))
const tbody = document.querySelector("tbody")

function mostrarProductos(productos){
    console.log(productos);

    productos.forEach(prod => console.log(prod))
}

const carrito = []




function buscarFigura(codigo) {

    let resultado = figuras.find(figura => figura.codigo === parseInt(codigo))
        return resultado 

}

function retornoFilaHTML(figura) {

    return `<tr>
                <td><img src="${figura.imagen}"</td> 
                <td>${figura.tipo}</td>
                <td>$ ${figura.precio}</td>
                <td><button id="${figura.codigo}">ADD</button></td>
            </tr>`

}

function eliminarDelCarrito(id) {

    let indice = carrito.findIndex((figura)=> figura.codigo === id)
        indice > -1 && carrito.splice(indice, 1)

}

function cargarFiguras(array) {

    tbody.innerHTML = ""
    array.forEach(element => {
        tbody.innerHTML += retornoFilaHTML(element)
    })
    activarClickEnBotones()

}
cargarFiguras(figuras)

function activarClickEnBotones() {
    
    const buttons = document.querySelectorAll("button")
        for (boton of buttons) {
            boton.addEventListener("click", (e)=> {
                agregarAlCarrito(e.target.id)

            })
        }
}

function agregarAlCarrito(id) {

    let resultado = figuras.find(figura => figura.codigo === parseInt(id))
        if (resultado !== undefined) {
            carrito.push(resultado)
            console.log("Se agregó la figura de", resultado.tipo, "al carrito.")
            Swal.fire(
                'Producto agregado',
                'question'
            )
            guardarElCarrito(carrito)
        }
}

function guardarElCarrito(carrito) {

    if (carrito.length > 0) {
        localStorage.setItem("carritoFiguras", JSON.stringify(carrito))
    }
}

function recuperarCarrito() {

    const carritoRecuperado = JSON.parse(localStorage.getItem("carritoFiguras"))
    if (carritoRecuperado.length > 0) {
        carrito.push(...carritoRecuperado)
    }
}
recuperarCarrito()

function finalizarCompra() {
    
    let totalCarrito = carrito.reduce((acc, figura)=> acc + figura.precio, 0)
    alert("El importe del carrito es de: $ " + totalCarrito)
}

