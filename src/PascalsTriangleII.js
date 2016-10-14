// Given an index k, return the kth row of the Pascal's triangle.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1]
		if (rowIndex == 1) return [1, 1]
		res = [[1], [1, 1]]
		for (var i = 2; i <= rowIndex; i++) {
    var arr = []
    arr[0] = 1
    arr[i] = 1
    for (j = 1; j < i; j++) {
      arr[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(arr)
		}
		return res[rowIndex];
};