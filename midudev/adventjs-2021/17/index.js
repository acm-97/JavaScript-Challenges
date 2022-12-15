/**
 * It recursively counts the number of packages for a given carrier, and all of its subordinates.
 * @param carriers - [[carrierID, numPackages, subordinates], ...]
 * @param carrierID - the ID of the carrier to count packages for
 * @returns The number of packages that the carrier with the given ID is responsible for.
 */
export default function countPackages(carriers, carrierID) {
  const carrier = carriers.find((item) => item[0] === carrierID);
  if (!carrier) return 0;

  const [, numPackages, subordinates] = carrier;
  return subordinates.reduce(
    (acc, subordinateId) => acc + countPackages(carriers, subordinateId),
    numPackages
  );
}

// console.log(
//   countPackages(
//     [
//       ["dapelu", 5, ["midu", "jelowing"]],
//       ["midu", 2, []],
//       ["jelowing", 2, []],
//     ],
//     "dapelu"
//   )
// );
