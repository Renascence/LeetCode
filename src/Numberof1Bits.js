// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0 
    while(n>0){
    	if(n%2 == 1){
    		res ++
    	}
    	n = Math.floor(n/2)
    }
    return res;
};