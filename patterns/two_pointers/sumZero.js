// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero on undeifned if a pair does not exist.
// examples: 
// [-3, -2, -1, 0, 1, 2, 3]		// returns [-3, 3]
// [-2, 0, 1, 3]				// returns undefined
// [1, 2, 3]					// undefined

// solution 1: Time Complexity => O(n^2)
function sumToZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

