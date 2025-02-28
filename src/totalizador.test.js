import totalizar from "./totalizador.js";

describe("Totalizar", () => {
  it("Debe retornar el Precio Neto", () => {
    const resultado = totalizar(1, 1, "CA");
    expect(resultado.precioNeto).toBe(1);
  });
  it("Debe calcular correctamente los impuestos para el estado de California (CA)", () => {
    const resultado = totalizar(1, 1, "CA");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0825);
  });
  it("Debe calcular correctamente los impuestos para el estado de California (NV)", () => {
    const resultado = totalizar(1, 1, "NV");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.08);
  });
  it("Debe calcular correctamente los impuestos para el estado de California (UT)", () => {
    const resultado = totalizar(1, 1, "UT");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0665);
  });
  it("Debe calcular correctamente los impuestos para el estado de California (TX)", () => {
    const resultado = totalizar(1, 1, "TX");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0625);
  });
});

