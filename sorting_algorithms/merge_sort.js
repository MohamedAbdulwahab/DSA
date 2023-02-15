// write an implementation of merge sort in JavaScript.

// solution:
// step 1: the merge function
function merge(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  // merge the two arrays in an ascending order.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  // arr1 > arr2: push all the elements from arr1 into mergedArr.
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  // arr2 > arr1: push all the elements from arr2 into mergedArr.
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}
