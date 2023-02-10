/*
- Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
- This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

- Examples:
	- binarySearch([1,2,3,4,5],2) => returns 1
	- binarySearch([1,2,3,4,5],3) => returns 2
	- binarySearch([1,2,3,4,5],5) => returns 4
	- binarySearch([1,2,3,4,5],6) => returns -1
*/

// solution: O(log(n)) - runtime
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (val === arr[mid]) {
      return mid;
    } else if (val > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
