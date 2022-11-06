function ohm(V, R, I) {
  let result = 0;
  switch (true) {
    case V !== null && R !== null && I === null :
      result = `I = ${(V / R).toFixed(2)}`;
      break;
    case V !== null && R === null && I !== null :
      result = `R = ${(V / I).toFixed(2)}`;
      break;
    case V === null && R !== null && I !== null :
      result = `V = ${(I * R).toFixed(2)}`;
      break;
    default:
      result = "Invalid values";
      break;
  }
  return result;
}

console.log(ohm());
console.log(ohm(5.0, null, null));
console.log(ohm(5.0, 4.0, null));
console.log(ohm(5.0, null, 4.0));
console.log(ohm(null, 5.0, 4.0));
console.log(ohm(5.125, 4.0, null));
console.log(ohm(5.0, null, 4.125));
console.log(ohm(null, 5.0, 4.125));
console.log(ohm(5.0, 0.0, null));
console.log(ohm(5.0, null, 0.0));
console.log(ohm(null, 5.0, 0.0));
console.log(ohm(5.0, 4.0, 3.0));
