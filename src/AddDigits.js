// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

var addDigits = function (num) {
  function sum(arr) {
    for (var sum = (i = 0); i < arr.length; i++) sum += arr[i];
    return sum;
  }
  if (String(num).length == 1) {
    return num;
  } else return addDigits(sum(String(num).split('')));
};
