//Array de alimentos
let productos = [
    { "imagen": "img/frutas/manzanaVerde.png", "alt": "Manzana verde", "descripcion": "Manzana verde", "precio": "0.60" },
    { "imagen": "img/frutas/manzanaRoja.png", "alt": "Manzana roja", "descripcion": "Manzana roja", "precio": "0.65" },
    { "imagen": "img/frutas/platano.png", "alt": "Plátano", "descripcion": "Plátano", "precio": "0.30" },
    { "imagen": "img/frutas/fresa.png", "alt": "Fresa", "descripcion": "Fresa", "precio": "0.40" },
    { "imagen": "img/frutas/pera.png", "alt": "Pera", "descripcion": "Pera", "precio": "0.60" },
    { "imagen": "img/frutas/naranja.png", "alt": "Naranja", "descripcion": "Naranja", "precio": "0.70" },
    { "imagen": "img/frutas/sandia.png", "alt": "Sandía", "descripcion": "Sandía", "precio": "5.00" },
    { "imagen": "img/frutas/melon.png", "alt": "Melón", "descripcion": "Melón", "precio": "5.50" },
    { "imagen": "img/frutas/pinna.png", "alt": "Piña", "descripcion": "Piña", "precio": "5.50" },
    { "imagen": "img/frutas/kiwi.png", "alt": "Kiwi", "descripcion": "Kiwi", "precio": "0.45" },
    { "imagen": "img/frutas/limon.png", "alt": "Limón", "descripcion": "Limón", "precio": "0.20" },
    { "imagen": "img/frutas/melocoton.png", "alt": "Melocotón", "descripcion": "Melocotón", "precio": "0.40" },
    { "imagen": "img/frutas/uva.png", "alt": "Uva", "descripcion": "Uva", "precio": "2.20" },
    { "imagen": "img/frutas/aguacate.png", "alt": "Aguacate", "descripcion": "Aguacate", "precio": "1.00" },
    { "imagen": "img/frutas/cerezas.png", "alt": "Cerezas", "descripcion": "Cerezas", "precio": "0.20" },
    { "imagen": "img/frutas/coco.png", "alt": "Coco", "descripcion": "Coco", "precio": "3.10" },
    { "imagen": "img/frutas/arandanos.png", "alt": "Arándanos", "descripcion": "Arándanos", "precio": "0.70" },
    { "imagen": "img/frutas/mango.png", "alt": "Mango", "descripcion": "Mango", "precio": "0.80" }
];
let productosEnCarrito = []
let divProductos = document.querySelector(".productos");
let divCarrito = document.querySelector(".carrito");
let productoSeleccionado = -1;
let precioTotal = 0;
productos.forEach((producto, i) => {
    let divImagenes = document.createElement("div");
    divImagenes.className = "claseDivImagenes";
    divImagenes.innerHTML = `
        <img src="${producto.imagen}" class="producto-${i}"/>
        <p>${producto.descripcion}</p>
        <p>${producto.precio} €</p>
    `;
    divImagenes.classList.add("producto-"+i);
    divImagenes.setAttribute("draggable", "true");
    divImagenes.setAttribute("ondragstart", "drag(event)");
    divProductos.appendChild(divImagenes);

})

function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.target.getAttribute("src") ?   this.productoSeleccionado = parseInt(dragevent.target.classList[0].split("-")[1]) :   this.productoSeleccionado = parseInt(dragevent.target.classList[1].split("-")[1]);
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

function drop(dropevent) {
    dropevent.preventDefault();
    escribirListaCarrito(this.productoSeleccionado);
}

function escribirListaCarrito(frutaannadida){
    productosEnCarrito.push(productos[frutaannadida]);
    refrescarCarrito();
}
function refrescarCarrito(){
    divCarrito.querySelector(".listado").innerHTML = "";
    productosEnCarrito.forEach(element=>{
        let listaCarrito = document.createElement("p");
        listaCarrito.className = "claseListaCarrito";
        listaCarrito.innerHTML = `
    ${element.descripcion} - ${element.precio} € <button onclick='eliminarProducto(${productosEnCarrito.indexOf(element)})'>x</button>`;
        divCarrito.querySelector(".listado").appendChild(listaCarrito);
    })
    this.calcularPrecioTotal();
}
function eliminarProducto(index){
    productosEnCarrito.splice(index, 1);
    refrescarCarrito();
}

function calcularPrecioTotal(){
    precioTotal = 0;
    productosEnCarrito.forEach(element=>{
        precioTotal += parseFloat(element.precio);
    })
    document.querySelector(".total").innerHTML = `
        TOTAL: ${precioTotal.toFixed(2)} €
    `;
}