import totalizar from "./totalizador.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const textCantidad = document.querySelector("#info-cantidad");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${totalizar(cantidadItems)}`;
});
