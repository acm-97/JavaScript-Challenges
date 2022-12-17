/**
 * It iterates over the trip, and for each step it checks if the current step's gifts exceed the
 * capacity, if so it returns false. If not, it checks if the current step's gifts plus the gifts of
 * the pending steps exceed the capacity, if so it returns false. If not, it adds the current step to
 * the pending steps
 * @param capacity - the maximum weight that the sleigh can carry
 * @param trip - [[1,2,3], [2,3,4]]
 * @returns A boolean value.
 */
export default function canCarry(capacity, trip) {
  let pendingSteps = []

  for (let index = 0; index < trip.length; index++) {
    const currentStep = trip[index]
    if (currentStep[0] > capacity) return false

    pendingSteps = pendingSteps.filter(step => step[2] > currentStep[1])
    const pendingGifts = pendingSteps.reduce((acc, step) => acc + step[0], 0)
      if (currentStep[0] + pendingGifts > capacity) return false

    pendingSteps.push(currentStep)
  }

  return true
}

// console.log(canCarry(3, [
//   [2, 1, 5],
//   [3, 5, 7],
// ]));
                                                                        