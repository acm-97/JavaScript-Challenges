export default function groupBy(collection, it) {
  return collection.reduce((acc, curr) => {
   const key = typeof it === 'function' ? it(curr) : curr[it]
    acc[key] = acc[key] ? [...acc[key], curr] : [curr]
    return acc
   }, {})
 }