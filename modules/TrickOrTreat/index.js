import readline from "readline";
import { getRandomItems } from "../../utils/index.js";

const scaries = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"];
const candies = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"];

const child = [
  { name: "Frodo", age: 24, size: 176 },
  { name: "Lily", age: 18, size: 140 },
  { name: "Sam Sagaz", age: 30, size: 256 },
  { name: "Molly", age: 9, size: 80 },
];

// logic for answer equals trick
function ChooseTrick() {
  child.map((item, parentIndex) => {
    let scariesItems = "";
    let cmCount = Math.trunc(item["size"] / 100);

    Array.from(item["name"].replace(" ", "")).forEach((item, i) => {
      if ((i + 1) % 2 == 0) scariesItems += getRandomItems(scaries);
    });

    if (item["age"] % 2 == 0) scariesItems += getRandomItems(scaries, 2);

    for (let index = 0; index < cmCount; index++) {
      scariesItems += getRandomItems(scaries, 3);
    }
    console.log(scariesItems);
  });
}

// logic for answer equals Treat
function ChooseTreat() {
  child.map((item, parentIndex) => {
    let candiesItems = "";
    let ageCount = 3;
    let age = item["age"] - 3;
    let cmCount = Math.trunc(item["size"] / 50);

    Array.from(item["name"].replace(" ", "")).forEach(() => {
      candiesItems += getRandomItems(candies);
    });

    while (ageCount < 10 && age > 3) {
      candiesItems += getRandomItems(candies);
      ageCount += 3;
      age -= 3;
    }

    if (cmCount <= 3) {
      Array.from(Array(cmCount)).forEach(
        () => (candiesItems += getRandomItems(candies, 2))
      );
    }
    console.log(candiesItems);
  });
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// red and capture an input from terminal
rl.question("Trick or Treat?: ", (answer) => {
  answer === "Trick" ? ChooseTrick() : ChooseTreat();
  rl.close();
});
