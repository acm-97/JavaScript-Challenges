function countHours(year: number, holidays: string[]) {
  /* Iterating through the holidays array and checking if the day is a weekday. If it is, it adds 2 to
  the accumulator. If it is not, it adds 0 to the accumulator. */
  return holidays.reduce((acc, curr) => {
    let day = new Date(`${curr}/${year}`);
    return day.getDay() > 0 && day.getDay() < 6 ? acc + 2 : acc + 0;
  }, 0);
}

export default function countHoursOptimezed(year: number, holidays: string[]) {
  /* Filtering out the holidays that are on a weekend and then multiplying the length of the array by 2
  to get the number of hours. */
  return (
    holidays.filter(
      (holiday) => ![0, 6].includes(new Date(`${year}/${holiday}`).getDay())
    ).length * 2
  );
}
