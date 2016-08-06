// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

/**
 * @param {number} n
 * @return {number}
 */

 // the simplest solution
 var countNumbersWithUniqueDigits = function(n) {
  if(n == 0) {return 1}
 	if(n == 1) {return 10}
 	if(n == 2) {return 91}
 	if(n == 3) {return 739}
 	if(n == 4) {return 5275}
 	if(n == 5) {return 32491}
 	if(n == 6) {return 168571}
 	if(n == 7) {return 712891}
 	if(n == 8) {return 2345851}
 	if(n == 9) {return 5611771}
 	if(n >= 10) {return 8877691}
};

// ------------------------------------------------

 var countNumbersWithUniqueDigits = function(n) {
 	if(n == 0) {return 1}
	if(n == 1) {return 10}
 	var 	sum = 10
 	for(j = 2 ; j <= n ; j++ ){
 		var t = 9
 		for(i = 1 ; i < j ; i++){
 			t *= ( 10- i )
 		}
 		sum += t
 	}
 	return sum
};

