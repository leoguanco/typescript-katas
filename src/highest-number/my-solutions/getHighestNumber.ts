export function getHighestNumber(listOfNumbers: number[]): number | null {
  if (listOfNumbers.length === 0) {
    return null
  }

  return listOfNumbers.reduce((highestNumber, currentNumber) => {
    if (currentNumber > highestNumber) {
      return currentNumber
    }

    return highestNumber
  }, listOfNumbers[0])
}
