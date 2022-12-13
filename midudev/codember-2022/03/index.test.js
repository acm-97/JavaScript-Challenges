import CalculateColorStrip from "./index";
import { colors } from "./colors.js";

const cases = [
  {
    colors,
    expected: "30, red",
  },
  { colors: ["red", "blue", "red", "blue", "green"], expected: "4, blue" },
  { colors: ["green", "red", "blue", "gray"], expected: "2, gray" },
  { colors: ["blue", "blue", "blue", "blue"], expected: "1, blue" },
  {
    colors: ["red", "green", "red", "green", "red", "green"],
    expected: "6, green",
  },
  { colors: ["blue", "red", "blue", "red", "gray"], expected: "4, red" },
  {
    colors: ["red", "red", "blue", "red", "red", "red", "green"],
    expected: "3, red",
  },
  {
    colors: ["red", "blue", "red", "green", "red", "green", "red", "green"],
    expected: "6, green",
  },
];

describe("La zebra de colores", () => {
  test.each(cases)("Larger colored strip", ({ colors, expected }) => {
    expect(CalculateColorStrip(colors)).toEqual(expected);
  });
});
