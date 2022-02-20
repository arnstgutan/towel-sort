
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((toweld, subArray, i) => {
    subArray.sort((a, b) => (i & 1) ? b - a : a - b).map(elem => toweld.push(elem));
    return toweld;
  }, [])
}
