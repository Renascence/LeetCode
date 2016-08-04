// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
    var len = nums.length
	if(len == k){
		return nums
	}
	nums = nums.sort()
	var obj = []
	var cut = 1,res = []
	for(var i=len-1;i>=1;i--){
		if(nums[i] == nums[i-1] && i != 1){
			nums.splice(i,1)
			cut ++
		}
		else{
			i==1 ? obj.push([cut +1,nums[i]]) : obj.push([cut,nums[i]])
			cut = 1
		}
	}
	obj.sort(function(a, b){return b[0] - a[0]});  
	for(var j = 0 ; j < k ; j ++){
		res.push(obj[j][1])
	}
	return res
};