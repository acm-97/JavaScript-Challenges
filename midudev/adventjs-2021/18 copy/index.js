export default function learnPlatzi(time, courses) {
  let bestChoises = null;
  let accTime = 0;

  parentLopp: for (let i = 0; i < courses.length; i++) {
    if (courses[i] === time) continue;

    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] === time) continue;

      const sum = courses[i] + courses[j];

      if (sum > accTime && sum <= time) {
        accTime = sum;
        bestChoises = [i, j];
      }

      if (accTime === time) break parentLopp;
    }
  }
  return bestChoises;
}

// console.log(learnPlatzi(10, [2, 3, 8, 1, 4]));
