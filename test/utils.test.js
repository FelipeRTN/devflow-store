import { describe, it, expect } from "vitest";
import { formatPrice, filterProducts } from "../app.js";

describe("formatPrice", () => {
  it("formata número em BRL", () => {
    const r = formatPrice(1234.56);
    expect(r).toMatch(/R\$\s?1\.234,56/);
  });
});

describe("filterProducts", () => {
  const list = [
    { name: "ABC" },
    { name: "Mouse" },
    { name: "Teclado" }
  ];
  it("retorna todos se query vazia", () => {
    expect(filterProducts("", list)).toHaveLength(3);
  });
  it("filtra por case-insensitive", () => {
    const r = filterProducts("moU", list);
    expect(r).toEqual([{ name: "Mouse" }]);
  });
});
