function binarySearch(numToSearch, sortedNumbers = []) {
  if (typeof numToSearch !== 'number') return false;
  if (sortedNumbers.length === 0) return false;
  if (numToSearch > sortedNumbers[sortedNumbers.length - 1]) return false;
  if (sortedNumbers[0] === numToSearch) return true;

  const middleIndex = Math.floor(sortedNumbers.length / 2);
  const middle = sortedNumbers[middleIndex];
  if (numToSearch === middle) return true;

  const leftPart = sortedNumbers.slice(0, middleIndex);
  const rightPart = sortedNumbers.slice(middleIndex, sortedNumbers.length);

  return numToSearch < middle ? binarySearch(numToSearch, leftPart) : binarySearch(numToSearch, rightPart);
}

module.exports = { binarySearch };
