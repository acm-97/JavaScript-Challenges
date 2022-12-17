/**
 * It recursively counts the number of packages for a given carrier, and all of its subordinates.
 * @param {any[]} carriers - [[carrierID, numPackages, subordinates], ...]
 * @param {string} carrierID - the ID of the carrier to count packages for
 * @returns {number} The number of packages that the carrier with the given ID is responsible for.
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
