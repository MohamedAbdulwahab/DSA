// write a recursive function called factorial to calculate teh factorial of an integer n.

// solution
function factorial(n) {
  // base case
  if (n <= 0) {
    return 1;
  }

  // recursive step
  return n * factorial(n - 1);
}
