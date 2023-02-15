// write an implementation of selection sort in JavaScript.

// solution:
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
}
