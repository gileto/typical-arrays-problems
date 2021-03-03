
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for(let val of array) {
    sum += val;
  }

  return sum / array.length;
}
