//Array de alimentos
let productos = [
    { "imagen": "img/frutas/manzanaVerde.png", "alt": "Manzana verde", "descripcion": "Manzana verde", "precio": "0,60" },
    { "imagen": "img/frutas/manzanaRoja.png", "alt": "Manzana roja", "descripcion": "Manzana roja", "precio": "0,65" },
    { "imagen": "img/frutas/platano.png", "alt": "Plátano", "descripcion": "Plátano", "precio": "0,30" },
    { "imagen": "img/frutas/fresa.png", "alt": "Fresa", "descripcion": "Fresa", "precio": "0,40" },
    { "imagen": "img/frutas/pera.png", "alt": "Pera", "descripcion": "Pera", "precio": "0,60" },
    { "imagen": "img/frutas/naranja.png", "alt": "Naranja", "descripcion": "Naranja", "precio": "0,70" },
    { "imagen": "img/frutas/sandia.png", "alt": "Sandía", "descripcion": "Sandía", "precio": "5,00" },
    { "imagen": "img/frutas/melon.png", "alt": "Melón", "descripcion": "Melón", "precio": "5,50" },
    { "imagen": "img/frutas/pinna.png", "alt": "Piña", "descripcion": "Piña", "precio": "5,50" },
    { "imagen": "img/frutas/kiwi.png", "alt": "Kiwi", "descripcion": "Kiwi", "precio": "0,45" },
    { "imagen": "img/frutas/limon.png", "alt": "Limón", "descripcion": "Limón", "precio": "0,20" },
    { "imagen": "img/frutas/melocoton.png", "alt": "Melocotón", "descripcion": "Melocotón", "precio": "0,40" },
    { "imagen": "img/frutas/uva.png", "alt": "Uva", "descripcion": "Uva", "precio": "2,20" },
    { "imagen": "img/frutas/aguacate.png", "alt": "Aguacate", "descripcion": "Aguacate", "precio": "1,00" },
    { "imagen": "img/frutas/cerezas.png", "alt": "Cerezas", "descripcion": "Cerezas", "precio": "0,20" },
    { "imagen": "img/frutas/coco.png", "alt": "Coco", "descripcion": "Coco", "precio": "3,10" },
    { "imagen": "img/frutas/arandanos.png", "alt": "Arándanos", "descripcion": "Arándanos", "precio": "0,70" },
    { "imagen": "img/frutas/mango.png", "alt": "Mango", "descripcion": "Mango", "precio": "0,80" }
];

let divProductos = document.querySelector(".productos");
let divCarrito = document.querySelector(".carrito");

productos.forEach((producto, i) => {
    let divImagenes = document.createElement("div");
    divImagenes.className = "claseDivImagenes";
    divImagenes.innerHTML = `
        <img src="${producto.imagen}"/>
        <p>${producto.descripcion}</p>
        <p>${producto.precio} €</p>
        <p>${i}</p>
    `;
    divImagenes.setAttribute("draggable", "true");
    divImagenes.setAttribute("ondragstart", "drag(event)");
    divProductos.appendChild(divImagenes);

})

function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

function drop(dropevent) {
    dropevent.preventDefault();
    const data = dropevent.dataTransfer.getData("text");
    var frutaannadida = averiguarFruta(data);
    if (frutaannadida != 9999){
        escribirListaCarrito(frutaannadida);
    }else{
        console.log("Fruta innexistente (T.57)");
    }
}

function pasarDataAFruta(data){
    console.log(data);
    productos.forEach((element, i) => {
        console.log(element.descripcion);
        if(data.includes(element.imagen)){
        }
    });
}

function escribirListaCarrito(frutaannadida){
    let listaCarrito = document.createElement("p");
    listaCarrito.className = "claseListaCarrito";
    listaCarrito.innerHTML = `
    <p>${productos[frutaannadida].descripcion} - ${productos[frutaannadida].precio} €</p>
    `;
    divCarrito.appendChild(listaCarrito);
}

function averiguarFruta(data) {
    if (data.includes("manzanaVerde")) {
        return 0;
    } else if (data.includes("manzanaRoja")) {
        return 1;
    } else if (data.includes("platano")) {
        return 2;
    } else if (data.includes("fresa")) {
        return 3;
    } else if (data.includes("pera")) {
        return 4;
    } else if (data.includes("naranja")) {
        return 5;
    } else if (data.includes("sandia")) {
        return 6;
    } else if (data.includes("melon")) {
        return 7;
    } else if (data.includes("pinna")) {
        return 8;
    } else if (data.includes("kiwi")) {
        return 9;
    } else if (data.includes("limon")) {
        return 10;
    } else if (data.includes("melocoton")) {
        return 11;
    } else if (data.includes("uva")) {
        return 12;
    } else if (data.includes("aguacate")) {
        return 13;
    } else if (data.includes("cerezas")) {
        return 14;
    } else if (data.includes("coco")) {
        return 15;
    } else if (data.includes("arandanos")) {
        return 16;
    } else if (data.includes("mango")) {
        return 17;
    } else {
        return 9999;
    }
}


// productos.forEach(i => {
//     let divImagenes = document.createElement("div");
//     let nombreProducto = document.createElement("p");
//     let precio = document.createElement("p");
//     divImagenes.classList.add("claseDivImagenes");
//     let img = document.createElement("img");
//     img.src = i.imagen;
//     img.alt = i.alt;
//     img.draggable = i.draggable;
//     nombreProducto.innerHTML = i.descripcion;
//     precio.innerHTML = i.precio + " €";
//     precio.innerHTML = `${i.precio} €`;
//     divProductos.appendChild(divImagenes);
//     divImagenes.appendChild(img);
//     divImagenes.appendChild(nombreProducto);
//     divImagenes.appendChild(precio);
// });

// let carrito = document.getElementById("carrito");