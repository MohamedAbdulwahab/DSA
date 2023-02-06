// given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another.
// Example: cinema => iceman 

// solution 1: naive solution 
function isAnagram(str1, str2) {
	const sortedStr1 = str1.split('').sort().join('');
	const sortedStr2 = str2.split('').sort().join('');

	return sortedStr1 === sortedStr2;
}

// solution 2: frequency counter 
function validAnagram(strOne, strTwo) {
	const strOneCounter = {};
	const strTwoCounter = {};
  
	for(let i = 0; i < strOne.length; i++) {
	  if(!strOneCounter[strOne[i]]) {
		strOneCounter[strOne[i]] = 1;
	  } else {
		strOneCounter[strOne[i]]++;
	  }
	}
  
	for(let i = 0; i < strTwo.length; i++) {
	  if(!strTwoCounter[strTwo[i]]) {
		strTwoCounter[strTwo[i]] = 1;
	  } else {
		strTwoCounter[strTwo[i]]++;
	  }
	}
  
	for (const letter in strOneCounter) {
	  if(strOneCounter[letter] !== strTwoCounter[letter]) {
		return false;
	  }
	}
  
	return true;
  }
