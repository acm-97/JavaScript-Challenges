export default function daysToXmas(date=new Date('Dec 25, 2021 23:59:59')) {
  let dec25 = new Date("Dec 25, 2021")
  dec25 = dec25.getTime() / 1000 / 60 / 60 / 24
  date = date.getTime() / 1000 / 60 / 60 / 24
  const result = Math.ceil(dec25 - date)
  return result === -0 ? 0 : result
}