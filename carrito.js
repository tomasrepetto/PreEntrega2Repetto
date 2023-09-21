// Clase "molde" para los modelos de zapatillas
class Item {
    constructor(marca, nombre, precio, imagen) {
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Modelos de zapatillas
const airMax90 = new Item("Nike", "Air Max 90", 93, "AirMax90.jpg");
const airForce1 = new Item("Nike", "Air Force 1", 72, "AirForce1.jpg");
const forum = new Item("Adidas", "Forum", 49, "Forum.jpg");
const campus = new Item("Adidas", "Campus", 75, "Campus.jpg");
const retro1 = new Item("Jordan", "Retro 1", 216, "Retro1.jpg");
const retro4 = new Item("Jordan", "Retro 4", 212, "Retro4.jpg");
const y350 = new Item("Yeezy", "350", 186, "350.jpg");
const y700 = new Item("Yeezy", "700", 175, "700.jpg");

// Array para el carrito de compras donde se mostrara lo que seleccionamos
const carrito = [];

// Cantidad de dolares disponibles
let dolares = 500;
let total = 0;

// Elementos del DOM
const elDolar = document.querySelector("#dolares span");
elDolar.innerText = dolares; // Para que muestre la cantidad de dolares disponibles
const elCarrito = document.querySelector("#carrito");

const elTotal = document.querySelector("#total span");
elTotal.innerHTML = total;

// Función para agregar items a nuestro carrito
function comprar(zapatillas) {
    // Verificamos si tenemos el dinero disponible para la compra
    if (dolares - zapatillas.precio >= 0) {
      carrito.push(zapatillas);
      dolares -= zapatillas.precio;
      total += zapatillas.precio; // Actualizamos los dolares
      actualizarHTML();
    } else {
      alert(`No tenés el dinero suficiente para comprar ${zapatillas.nombre}.`);
    }
  }

// Función para quitar del carrito
function quitar(nombreZapatillas) {
  // Buscamos el item con find
  const zapatillaEncontrada = carrito.find((item) => item.nombre == nombreZapatillas);

  // Si está en el inventario, lo volamos y actualizamos el HTML
  if (zapatillaEncontrada) {
    // Actualizamos el oro
    dolares += zapatillaEncontrada.precio;
    total -= zapatillaEncontrada.precio;
    // Lo volamos del inventario
    const indice = carrito.indexOf(zapatillaEncontrada);
    carrito.splice(indice, 1);
    // Actualizamos el HTML
    actualizarHTML();
  }
}

// Actualizamos el HTML de la aplicación (dolares y zapatillas)
function actualizarHTML() {
  elCarrito.innerHTML = "";
  for (const zapatillas of carrito) {
    const li = `<li><img src="images/${zapatillas.imagen}" class="zapas">${zapatillas.marca} ${zapatillas.nombre}<button onclick="quitar('${zapatillas.nombre}')">Quitar</button></li>`;
    // Va a ir concatenando los li creados en el elemento #carrito (ul)
    elCarrito.innerHTML += li;
  }

  elDolar.innerText = dolares;
  elTotal.innerHTML = total;
}