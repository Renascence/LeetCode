/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
  const res = [];
  A.forEach((item) => {
    for (let i = 0; i < B.length; i++) {
      if (B[i] === item) {
        res.push(i);
        break;
      }
    }
  });
  return res;
};
