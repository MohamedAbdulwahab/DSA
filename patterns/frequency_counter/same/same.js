// write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency values must be the same.
// Examples: 
// [1, 2, 3], [4, 1, 9]     // true
// [1, 2, 3], [1, 9]        // false
// [1, 2, 1], [4, 4, 1]		// false

// solution: frequency counter
function same(arrOne, arrTwo) {
	if(arrOne.length !== arrTwo.length) {
	  return false;
	}
  
	const arrOneCounter = {};
	const arrTwoCounter = {};
	
	for(let i = 0; i < arrOne.length; i++) {
	  if(!arrOneCounter[arrOne[i]]) {
		arrOneCounter[arrOne[i]] = 1;
	  } else {
		arrOneCounter[arrOne[i]]++;
	  }
	}
  
	for(let i = 0; i < arrTwo.length; i++) {
	  if(!arrTwoCounter[arrTwo[i]]) {
		arrTwoCounter[arrTwo[i]] = 1;
	  } else {
		arrTwoCounter[arrTwo[i]]++;
	  }
	}
  
	for (const key in arrOneCounter) {
	  if(!((key * key) in arrTwoCounter)) {
		return false;
	  }
	  if(arrOneCounter[key] !== arrTwoCounter[key * key]) {
		return false;
	  }
	}
  
	return true;
  }