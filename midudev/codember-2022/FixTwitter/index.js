import { users } from "./users.js";

const requiredKeys = ["usr", "eme", "psw", "age", "loc", "fll"];

const validUsers = users
  .split("\n\n")
  .map((val) => val.replace(/\r?\n|\r/g, " "))
  .filter((val) => requiredKeys.every((e) => val.includes(e)))

console.log(validUsers.length);
console.log(validUsers[validUsers.length - 1]);
