/**
 * It returns true if the mouse can eat the cheese in the direction it's facing
 * @param {"up" | "down" | "left" | "right"} direction
 * @param {string[][]} game
 * @returns A boolean value.
 */
export default function canMouseEat(direction, game) {
  const mouse = () => {
    for (let i = 0; i < game.length; i++) {
      const idx = game[i].findIndex((val) => val === "m");
      if (idx !== -1) return { dim: i, idx };
    }
  };

  const { dim, idx } = mouse();

  switch (direction) {
    case "up":
      return game[dim - 1]?.[idx] === "*";
    case "down":
      return game[dim + 1]?.[idx] === "*";
    case "right":
      return game[dim]?.[idx + 1] === "*";
    case "left":
      return game[dim]?.[idx - 1] === "*";
  }
}

// const room = [
//   [" ", " ", " "],
//   [" ", " ", "m"],
//   [" ", " ", "*"],
// ];

// console.log(canMouseEat("up", room)); // false
// console.log(canMouseEat("down", room)); // true
// console.log(canMouseEat("right", room)); // false
// console.log(canMouseEat("left", room)); // false
