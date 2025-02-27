import totalizar from "./totalizador.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const price = document.querySelector("#precio-item");
const textCantidad = document.querySelector("#info-cantidadItems");
const textPrecio = document.querySelector("#info-precioItem");
const textPrecioNeto = document.querySelector("#info-precioNeto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);
  let precioItem = parseFloat(price.value);
  
  const resultado = totalizar(cantidadItems, precioItem);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${cantidadItems}`;
  textPrecio.textContent = `Precio por Item: ${precioItem}`;
  textPrecioNeto.textContent = `Precio Neto: ${resultado.precioNeto}`;

});