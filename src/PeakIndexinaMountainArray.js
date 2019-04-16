/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  // faster 
  const max = Math.max(...A)
  return A.indexOf(max)

  let left = 0;
  let right = A.length - 1
  while(left < right) {
    let mid = parseInt((left + right) / 2);
    if(A[mid] < A[mid + 1]) {
      left = mid +1;
    } else {
      right = mid;
    }
  }
  return left
};

