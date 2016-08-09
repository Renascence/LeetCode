
// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	var arr  = [ ]
	function n2(n) {
		var res = 1
		var i = n
		for ( i ;  i /2 >=1 ; i = Math.floor(i /2) ) {
			if (i % 2 == 1){
				res ++
			}
		}
		return res
	}
	arr[0] = 0
	for (j = 1 ; j<=num ; j++){
		arr.push(n2(j))
	}
	return arr
};