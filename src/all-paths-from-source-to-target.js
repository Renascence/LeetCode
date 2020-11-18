/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = []
  const N = graph.length - 1

  const bfs = (path, index) => {
    for (let i = 0; i < graph[index].length; i++) {
      const val = graph[index][i]
      if (val === N) {
        res.push([...path, N])
      } else {
        bfs([...path, val], val)
      }
    }
  }
  bfs([0], 0)
  return res
};