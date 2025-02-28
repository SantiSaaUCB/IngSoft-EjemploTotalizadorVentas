function totalizar(cantidad_items, precio_item, codigo_estado) {
  const precioNeto = cantidad_items * precio_item;
  let impuesto = 0;

  switch (codigo_estado) {
    case "CA": impuesto = 0.0825; break;
    case "NV": impuesto = 0.08; break;
    case "UT": impuesto = 0.0665; break;
    case "TX": impuesto = 0.0625; break;
    case "AL": impuesto = 0.04; break;
    default: impuesto = 0;
  }

  return {
    precioNeto,
    impuesto
  };
}

export default totalizar;