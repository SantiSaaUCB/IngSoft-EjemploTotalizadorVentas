import totalizar from "./totalizador.js";

describe("Totalizar", () => {
  it("Debe mostrar la cantidad de items ingresada", () => {
    expect(totalizar(1)).toEqual(1);
  });
});


