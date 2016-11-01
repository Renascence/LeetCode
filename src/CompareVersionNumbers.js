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
  if(num1.length > num2.length) {
    var flag = 0 
    for (var i = 0; i < num1.length; i++) {
      if(num2[i] == undefined) num2[i] =0
      if (parseInt(num1[i]) == parseInt(num2[i])) flag ++
      
    }
    if(flag == num1.length) return 0
    for (var i = 0; i < num1.length; i++) {
      if(num2[i] == undefined) num2[i] =0
      
      if (parseInt(num1[i]) > parseInt(num2[i])) return 1
      if (parseInt(num1[i]) < parseInt(num2[i])) return -1
      
    }
    return -1
  }
  else {
    var flag = 0 
    for (var i = 0; i < num2.length; i++) {
      if(num1[i] == undefined) num1[i] =0
      if (parseInt(num1[i]) == parseInt(num2[i])) flag ++
      
    }
    if(flag == num2.length) return 0
    for (var i = 0; i < num2.length; i++) {
      if(num1[i] == undefined) num1[i] =0
      
      if (parseInt(num1[i]) > parseInt(num2[i])) return 1
      if (parseInt(num1[i]) < parseInt(num2[i])) return -1
      
    }
    return -1
  }
};