function totalizar(cantidad_items, precio_item) {
  const precioNeto = cantidad_items * precio_item;
  return {
    precioNeto
  };
}

export default totalizar;