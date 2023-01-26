// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// solution
function recursiveRange(n) {
  // base case
  if (n <= 0) {
    return 0;
  }

  // recursive step
  return n + recursiveRange(n - 1);
}
