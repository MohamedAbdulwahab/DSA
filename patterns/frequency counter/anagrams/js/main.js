// given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another.
// Example: cinema => iceman 

// solution 1: 
function isAnagram(str1, str2) {
	const sortedStr1 = str1.split('').sort().join('');
	const sortedStr2 = str2.split('').sort().join('');

	return sortedStr1 === sortedStr2;
}