// write an implementation of merge sort in JavaScript.

// solution:
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

function mergeSort(arr) {
  // base case: an empty array or an array of one element
  if (arr.length <= 1) {
    return arr;
  }

  // find the middle point of the array.
  let mid = Math.floor(arr.length / 2);

  // recursively break the left side of the array into smaller arrays.
  let left = mergeSort(arr.slice(0, mid));

  // recursively break the right side of the array into smaller arrays.
  let right = mergeSort(arr.slice(mid));

  // merge the two sorted sides of the array and return it.
  return merge(left, right);
}
