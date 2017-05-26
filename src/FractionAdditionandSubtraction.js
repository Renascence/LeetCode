/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  function gcd(n, m) {
    if (m == 0) return n;
    return gcd(m, n % m);
  }
  const express = expression[0] == '-' ? expression : '+' + expression
  const chars = []
  let nums = express.split(/[+\-/]/)
  let resNums = []
  nums.shift()
  for (let i = 0; i < express.length; i++) {
    if (express[i] == '+' || express[i] == '-') {
      chars.push(express[i])
    }
  }
  for (let i = 0; i < nums.length;) {
    resNums.push(nums[i] * 2520 / nums[i + 1])
    i += 2
  }
  let numeratorStr = ''
  for (let i = 0; i < resNums.length; i++) {
    numeratorStr = numeratorStr + chars[i] + resNums[i]
  }
  const numerator = eval(numeratorStr)
  const gcdNum = Math.abs(gcd(numerator, 2520))
  return `${numerator / gcdNum}/${2520 / gcdNum}`
};