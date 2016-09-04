// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var arr = []
	function check(n){
		if(n == 1) {
			return true
		}
		if(arr.indexOf(n) != -1){
			return false
		}
		arr.push(n)
		var list = n.toString().split('')
		temp = 0
		for (var i = 0; i < list.length; i++) {
			temp += Math.pow(list[i],2)
		}
		return check(temp)
	}
	return check(n)
};