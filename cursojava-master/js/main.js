

const tbody = document.querySelector("tbody")

const carrito = []

const figuras = [

                {imagen: './images/batman.png',
                codigo: 1,
                tipo: 'Batman',
                precio: 1026},


                {imagen: './images/superman.png',
                codigo: 2,
                tipo: 'Superman',
                precio: 10710},

                {imagen: './images/catwoman.png',
                codigo: 3,
                tipo: 'Catwoman',
                    precio: 10892},

                {imagen: './images/wonderwoman.png',
                codigo: 4,
                tipo: 'Wonder Woman',
                    precio: 10264},

                {imagen: './images/capitanamerica.png',
                codigo: 5,
                tipo: 'Capitan America',
                    precio: 11528},

                {imagen: './images/hulk.png',
                codigo: 6,
                tipo: 'Hulk',
                    precio: 11047},

                {imagen: './images/blackcat.png',
                codigo: 7,
                tipo: 'Black Cat',
                    precio: 112654},

                {imagen: './images/capmarvel.jpg',
                codigo: 8,
                tipo: 'Capitan Marvel',
                    precio: 11215},

                {imagen: './images/doom.jpg',
                codigo: 9,
                tipo: 'Doom Trooper',
                    precio: 19812},

                {imagen: './images/duke.jpg',
                codigo: 10,
                tipo: 'Duke Nukem',
                    precio: 20158}]


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
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado a su carrito',
                
                
            })
            guardarElCarrito(carrito)
        }
}

function guardarElCarrito(carrito) {

    if (carrito.length > 0) {
        localStorage.setItem("carritoFiguras", JSON.stringify(carrito))
    }
}

function recuperarCarrito() {
	const carritoRecuperado = JSON.parse(localStorage.getItem("carritoFiguras")) || [];
	if (carritoRecuperado.length > 0) {
		carrito.push(...carritoRecuperado);
	}
}
recuperarCarrito()

function finalizarCompra() {
    
    let totalCarrito = carrito.reduce((acc, figura)=> acc + figura.precio, 0)
    alert("El importe del carrito es de: $ " + totalCarrito)

    
    
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json) 
        
        
    })

