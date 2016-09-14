// Reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	x = x + ''
	if(x.length == 1) return parseInt(x)
	var flag = ''
 	if(x[0] == '-') {
		flag = '-'
		x = x.substring(1)
	}
	x=x.split('').reverse().join('')
	while(x[0] == 0){
		x = x.substring(1)
	}
	if( parseInt(x) > 2147483648) return 0
	return parseInt(flag+x)
};