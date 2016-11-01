/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  for (var i = 0; i < version1.length; i++) {
    if (!isNaN(version1[i])) {
      var log = i
      break
    }
  }
  var num1 = version1.substring(log - 1).split('.')
  var num2 = version2.substring(log - 1).split('.')
  var flag = 0
  for (var i = 0; i < num1.length; i++) {
    console.log(num1[i],num2[i])
    if(num2[i] == undefined) num2[i] =0
    if (parseInt(num1[i]) == parseInt(num2[i])) flag ++
    
  }
  if(flag == num1.length) return 0
  for (var i = 0; i < num1.length; i++) {
    if(num2[i] == undefined) num2[i] =0
    
    if (parseInt(num1[i]) > parseInt(num2[i])) return 1
  }
  return -1
};