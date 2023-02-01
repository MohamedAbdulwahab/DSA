// implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// Examples:
// [1, 1, 1, 1, 1, 2] 					=> 2
// [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] => 7
// []									=> 0
// [-2, -1, -1, 0, 1] 					=> 4

// solution 1: two pointers - O(n) runtime
function countUniqueValues(arr) {
  let count = 0;

  let j = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[j]) {
      count++;
      i = j - 1;
    }
    j++;
  }

  return arr.length === 0 ? 0 : count + 1;
}
