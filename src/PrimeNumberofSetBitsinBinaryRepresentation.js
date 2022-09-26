/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  function isPrime(n) {
    if (n == 1) return false;
    if (n == 2) return true;
    var sq = Math.ceil(Math.sqrt(n));
    for (var i = 2; i <= sq; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  const Primes = [];
  let res = 0;
  for (let i = L; i <= R; i++) {
    const str = i.toString(2);
    let num = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '1') {
        num++;
      }
    }
    if (Primes[num] == undefined) {
      Primes[num] = isPrime(num);
    }
    if (Primes[num]) {
      res++;
    }
  }
  return res;
};
