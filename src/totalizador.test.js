import totalizar from "./totalizador.js";

describe("Totalizar", () => {
  it("Debe retornar el Precio Neto", () => {
    expect(totalizar(1, 1)).toEqual({
      precioNeto: 1
    });
  });
});

