class Producto {
  constructor(nombre, precio, proveedor) {
    this.nombre = nombre;
    this.precio = precio;
    this.proveedor = proveedor;
  }
}

const listaProductos = [];
let opcion = 0;

while (opcion !== -1) {
  opcion = Number(prompt("Selecciona una opción: 1-Agregar producto // 2-Mostrar productos // 3-Calcular total // 4-Salir: "));
  switch (opcion) {
    case 1:
      agregarProducto();
      break;
    case 2:
      mostrarProductos();
      break;
    case 3:
      calcularTotal();
      break;
    case 4:
      opcion = -1;
      break;
    default:
      alert("Opción no válida. Ingresa un número válido.");
  }
}

function agregarProducto() {
  let nombre = prompt("Ingresa el nombre del producto: ");
  let precio = Number(prompt("Ingresa el precio del producto: "));
  let proveedor = prompt("Ingresa el nombre del proveedor: ");

  const producto = new Producto(nombre, precio, proveedor);
  listaProductos.push(producto);
}

function mostrarProductos() {
  let mensaje = "Lista de productos:\n";
  for (let i = 0; i < listaProductos.length; i++) {
    mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}, Proveedor: ${listaProductos[i].proveedor}\n`;
  }
  alert(mensaje);
}

function calcularTotal() {
  let total = 0;
  let mensaje = "Lista de productos:\n";
  for (let i = 0; i < listaProductos.length; i++) {
    mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}\n`;
    total += listaProductos[i].precio;
  }
  mensaje += `\nTotal: $${total}`;
  alert(mensaje);
}