/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if(n<=0) return 0
    if(isBadVersion(1)) return 1
    if(isBadVersion(2)) return 2
    var left = 1
    var right = n
    var mid
    while(true) {
      mid = parseInt((left + right )/2)
      if(mid == left) return right
      if(isBadVersion(mid)) {
        right = mid
      }
      else{
        left = mid
      }
    }
  };
};