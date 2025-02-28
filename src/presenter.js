import totalizar from "./totalizador.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const price = document.querySelector("#precio-item");
const textCantidad = document.querySelector("#info-cantidadItems");
const textPrecio = document.querySelector("#info-precioItem");
const textPrecioNeto = document.querySelector("#info-precioNeto");
const state = document.querySelector("#estado");
const textEstado = document.querySelector("#info-estado")
const textPorcentajeImpuesto = document.querySelector("#info-porcentajeImpuestos");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);
  let precioItem = parseFloat(price.value);
  let estadoSeleccionado = state.value;
  const estadoNombre = state.options[state.selectedIndex].getAttribute("data-name");

  const resultado = totalizar(cantidadItems, precioItem, estadoSeleccionado);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${cantidadItems}`;
  textPrecio.textContent = `Precio por Item: ${precioItem}`;
  textPrecioNeto.textContent = `Precio Neto: ${resultado.precioNeto}`;
  textEstado.textContent = `Codigo de Estado: ${estadoSeleccionado}`;
  textPorcentajeImpuesto.textContent = `Impuestos a pagar en ${estadoNombre}: ${(resultado.impuesto * 100).toFixed(2)}%`;
});