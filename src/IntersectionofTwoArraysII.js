// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	var res = []
    for(var i in nums1){
    	var t = nums2.indexOf(nums1[i])
    	if(t != -1){
    		res.push(nums1[i])
    		nums2.splice(t,1)
    	}
    }
    return res
};