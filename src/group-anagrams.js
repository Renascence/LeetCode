/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const formattedArr = strs.map((str) => {
    return str
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join('');
  });
  const map = {};
  formattedArr.forEach((str, index) => {
    if (map[str]) {
      map[str].push(index);
    } else {
      map[str] = [index];
    }
  });
  const res = []
  Object.keys(map).forEach(key => {
    const indexList = map[key]
    res.push(
      indexList.map(index => strs[index])
    )
  })
  return res
};
