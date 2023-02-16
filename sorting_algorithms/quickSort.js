// write an implementation of quick sort in JavaScript.

// solution: pivot is always arr[0].
// Runtime = O(nlog(n)), unless the array is sorted, then we get O(n^2).
function pivot(arr, start = 0, end = arr.length - 1) {
  // choose pivot to always be the first element in the array.
  let pivot = arr[start];
  // a variable to track the swap index.
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    // find elements less than the pivot.
    if (pivot > arr[i]) {
      // increment the index to swap.
      swapIndex++;
      // swap the current element with the element at swap index.
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  // swap the pivot (first element) with the final swap index.
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  // return swap index (needed for the quickSort function).
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case: length of the sub-arrays is 1.
  if (left < right) {
    // find the initial pivot index.
    let pivotIndex = pivot(arr, left, right);

    // use the pivot index to sort the left side.
    quickSort(arr, left, pivotIndex - 1);

    // use the pivot index to sort the right side.
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
