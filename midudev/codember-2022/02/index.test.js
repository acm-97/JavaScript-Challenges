import decryptedCode from "./index";

const cases = [
  {
    message:
      "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101",
    expected: "thanks for playing codember please share",
  },
  { message: "109105100117", expected: "midu" },
  { message: "9911110010110998101114", expected: "codember" },
  { message: "9911110010110998101114 109105100117", expected: "codember midu" },
  { message: "11210897121 116101116114105115", expected: "play tetris" },
];

describe("Atrapa a esos ciber criminales", () => {
  test.each(cases)(
    "ASCII translation for $message",
    ({ message, expected }) => {
      expect(decryptedCode(message)).toEqual(expected);
    }
  );
});
