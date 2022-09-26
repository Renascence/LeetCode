var smallerNumbersThanCurrent = function (nums) {
  const temp = {};
  nums.forEach((val) => {
    if (temp[val]) {
      temp[val]++;
    } else {
      temp[val] = 1;
    }
  });
  const keys = Object.keys(temp).sort((a, b) => +a - +b);
  const times = {};
  keys.forEach((key, index) => {
    if (index === 0) {
      times[key] = 0;
    } else {
      times[key] = temp[keys[index - 1]] + times[keys[index - 1]];
    }
  });
  return nums.map((val) => times[val]);
};
