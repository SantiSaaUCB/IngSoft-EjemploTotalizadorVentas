import mostrar from "./mostrar.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const price = document.querySelector("#precio-item");
const textCantidad = document.querySelector("#info-cantidad");
const textPrecio = document.querySelector("#info-precio");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);
  let precioItem = parseFloat(price.value);
  
  const resultado = mostrar(cantidadItems, precioItem);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${resultado.cantidad_items}`;
  textPrecio.textContent = `Precio por Item: ${resultado.precio_item}`;

});