function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex(value => num <= value);
  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19));   // 2
console.log(getIndexToIns([5, 10, 15], 20));  // 3
console.log(getIndexToIns([5,10,15], 20));           // 0
