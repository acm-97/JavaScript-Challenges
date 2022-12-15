import countPackages from "./index";

const cases = [
  {
    collection: [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ],
    id: "dapelu",
    expected: 9,
  },
  {
    collection: [
      ["lolivier", 8, ["camila", "jesuspoleo"]],
      ["camila", 5, ["sergiomartinez", "conchaasensio"]],
      ["jesuspoleo", 4, []],
      ["sergiomartinez", 4, []],
      ["conchaasensio", 3, ["facundocapua", "faviola"]],
      ["facundocapua", 2, []],
      ["faviola", 1, []],
    ],
    id: "camila",
    expected: 15,
  },
];

describe("Day 17 challenge: Counting packages by carrier", () => {
  test.each(cases)(
    "$id can transport $expected packages",
    ({ collection, id, expected }) => {
      expect(countPackages(collection, id)).toEqual(expected);
    }
  );
});
