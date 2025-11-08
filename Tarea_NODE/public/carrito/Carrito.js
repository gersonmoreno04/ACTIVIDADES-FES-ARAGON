//MORENO ANAYA GERSON
//CARRITO DE COMPRAS
let ropas = [];

// Array de productos disponibles con nombre y precio
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    let ropa = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        ropa += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    return ropa;
}

// Función para agregar la ropa
function agregarRopa() {
    let inv = mostrarProductos();
    let eleccion = prompt(`Selecciona un producto por su número:\n${inv}`);
    let indice = parseInt(eleccion) - 1;
    if (indice >= 0 && indice < productos.length) {
        let productoSeleccionado = productos[indice];
        ropas.push(productoSeleccionado);
        alert(`Agregaste: ${productoSeleccionado.nombre} con un precio de $${productoSeleccionado.precio}`);
    } else {
        alert("Opción no válida. Por favor, elige un número de la lista.");
    }
}

// Función para mostrar el carrito y el total
function mostrarCarrito() {
    if (ropas.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de Compras:\n";
        let total = 0;

        ropas.forEach((ropa, index) => {
            mensaje += `${index + 1}.- ${ropa.nombre} - $${ropa.precio}\n`;
            total += ropa.precio;
        });

        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

// Función para mostrar el menú
function mostrarMenu() {
    let opcion;

    do {
        opcion = prompt(`
            Opciones Disponibles:
            1.- Agregar objeto
            2.- Mostrar Carrito
            3.- Salir
            Elige una opción
        `);

        switch (opcion) {
            case "1":
                agregarRopa();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                alert("Saliendo del programa");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo");
        }
    } while (opcion !== '3');
}

mostrarMenu();