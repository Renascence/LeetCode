// Given two strings s and t, write a function to determine if t is an anagram of s.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	console.log( s.split('').sort());
	console.log( t.split('').sort());
    return s.split('').sort() == t.split('').sort()
};