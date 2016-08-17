// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
	var arr = []
	for (var i = 0; i < matrix.length; i++) {
		arr = arr + ',' + matrix[i]
	}
	arr.split(',').splice(0,1).sort(function(a,b){
		return a-b
	})
	var res = arr.split(',')
	res.splice(0,1)
	res.sort(function(a,b){
		return a-b
	})
	return paresInt(res[k-1])
};

