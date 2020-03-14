var decompressRLElist = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i = i + 2) {
    let temp = []
    temp.length = nums[i]
    temp.fill(nums[i + 1])
    res.push(...temp)
  }
  return res
};