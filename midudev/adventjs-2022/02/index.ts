function countHours(year: number, holidays: string[]) {
  return holidays.reduce((acc, curr) => {
    let day = new Date(`${curr}/${year}`);
    return day.getDay() > 0 && day.getDay() < 6 ? acc + 2 : acc + 0;
  }, 0);
}

export default function countHoursOptimezed(year: number, holidays: string[]) {
  return (
    holidays.filter(
      (holiday) => ![0, 6].includes(new Date(`${year}/${holiday}`).getDay())
    ).length * 2
  );
}
