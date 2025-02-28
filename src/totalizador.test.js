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
});

