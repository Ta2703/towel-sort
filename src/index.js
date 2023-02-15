
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  let res = []
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse()
  }
  result = [].concat(...matrix)
  return result

}
