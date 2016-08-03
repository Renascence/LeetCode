/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
	if(nums.length == k){
		return nums
	}
	nums = nums.sort()
	var cut = 1, c = [],v = [],res = [],len = nums.length
	for(var i=len-1;i>=1;i--){
		if(nums[i] == nums[i-1]){
			if(i==1){
				c.push(cut +1)
				v.push(nums[i])
			}
			nums.splice(i,1)
			cut ++
		}
		else{
			c.push(cut)
			v.push(nums[i])
			cut = 1
		}
	}
	var obj = []
	for(var i =0 ; i < c.length ; i++){
		obj.push([c[i],v[i]])
	}
	obj.sort(function(a, b){return b[0] - a[0]});  
	for(var j = 0 ; j < k ; j ++){
		res.push(obj[j][1])
	}
	return res
};