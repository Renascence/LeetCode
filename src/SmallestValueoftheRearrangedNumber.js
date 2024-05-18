/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  const input = Math.abs(num);
  const arr = `${input}`.split('');
  if (num >= 0) {
    arr.sort((a, b) => a - b);
    const zeroStr = arr.filter((i) => i === '0').join('');
    const newArr = arr.filter((i) => i !== '0');
    newArr.splice(1, 0, zeroStr).join('');
    return Number(newArr.join(''));
  } else {
    arr.sort((a, b) => b - a);
    const zeroStr = arr.filter((i) => i === '0').join('');
    const newArr = arr.filter((i) => i !== '0');
    newArr.push(zeroStr);
    return Number(newArr.join('')) * -1;
  }
};
