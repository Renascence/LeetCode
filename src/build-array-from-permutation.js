var buildArray = function (nums) {
  return nums.map((val, index) => {
    return nums[nums[index]];
  });
};
