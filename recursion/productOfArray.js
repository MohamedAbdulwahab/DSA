// Write a recursive function called productOfArray which takes in an array of numbers and returns the product of all the numbers in the array.

// solution
function productOfArray(arr) {
  // base case
  if (arr.length === 0) {
    return 1;
  }

  // recursive step
  return arr[0] * productOfArray(arr.slice(1));
}
