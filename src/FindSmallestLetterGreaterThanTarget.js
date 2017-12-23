/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const num = target.charCodeAt(0)
  let smallest = num
  let res = num
  letters.forEach((char) => {
    const code = char.charCodeAt(0)
    if (code > num && (code < res || res === num)) {
      res = code
    }
    smallest = Math.min(smallest, code)
  })

  return res === num ? String.fromCharCode(smallest) : String.fromCharCode(res)
};