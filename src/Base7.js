/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  var flag = true
  if(num == 0) return '0'
  if (num < 0) {
    flag = false
    num = num * -1
  }
  var res = ''
  while(num !=0) {
    res =  num%7 + res
    num = parseInt(num/7)
  }
  res = flag ? res : '-' + res 
  return res
};