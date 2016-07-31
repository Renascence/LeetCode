// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var xor = 0
    var a= 0
    var b=0
        var mask = 1
    for (var i=0 ; i<nums.length;i++){
        xor ^= nums[i]
    }
    for(var x = 1 ; x < xor.toString(2).length ; x++){
        mask *= 2
    }
    for(var j=0;j<nums.length;j++){
    	if(nums[j]&mask){ a ^= nums[j] }
    	else {b ^= nums[j]}
    }
    return [a,b]
};