import wrapping from "./index";

describe("Reto #1", () => {
  it("returns an empty array when no gifts", () => {
    expect(wrapping([])).toEqual([]);
  });

  it("wraps one gift with paper", () => {
    expect(wrapping(["cat"])).toEqual(["*****\n*cat*\n*****"]);
  });

  it("wraps multiple gifts", () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
});
