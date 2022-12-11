import battleRoyale from "./index";
import { mecenas } from "./mecenas.js";

describe("Battle Royale de frameworks y bibliotecas", () => {
  test("Surviving technology equal to 4", () => {
    expect(battleRoyale([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(4);
  });

  test("Surviving user equal to Diana-100", () => {
    const arr = mecenas.map((value, index) => ({ value, index }));
    const { value, index } = battleRoyale(arr);
    expect(`${value}-${index}`).toBe("Diana-100");
  });
});
