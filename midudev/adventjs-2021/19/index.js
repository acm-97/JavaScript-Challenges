/**
 * It loops through the array of courses, and for each course it loops through the array again,
 * starting from the next course, and checks if the sum of the two courses is less than or equal to the
 * time available, and if it is, it checks if the sum is greater than the current accumulated time, and
 * if it is, it updates the accumulated time and the best choices
 * @param {number} time - the amount of time you have to learn
 * @param {number[]} courses - [1, 3, 4, 6, 7, 9, 10, 11 ]
 * @returns {number[]} The index of the two courses that add up to the time given.
 */
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
