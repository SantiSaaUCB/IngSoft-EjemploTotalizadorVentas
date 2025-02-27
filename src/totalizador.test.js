import mostrar from "./mostrar.js";

describe("Mostrar", () => {
  it("Debe mostrar la cantidad de items ingresada", () => {
    expect(mostrar(1)).toEqual(1);
  });

  it("Debe mostrar el precio del item ingresado", () => {
    expect(mostrar(1, 10)).toEqual(10);
  }); 
});

