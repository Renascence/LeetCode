/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var res = []
  var cur = []
  function cal(start,sum,target,candidates){
    if(sum > target) return
    if(sum == target) {
      res[res.length] = []
      for(var j in cur) {
        res[res.length-1].push(cur[j])
      }
      return
    }
    else{
      for(var i = start;i<candidates.length;i++){
        cur.push(candidates[i])
        cal(i,sum+candidates[i],target,candidates)
        cur.length = cur.length -1
      }
    }
  }
  cal(0,0,target,candidates)
  return res
};


console.log(combinationSum([2,3,6,7],7))