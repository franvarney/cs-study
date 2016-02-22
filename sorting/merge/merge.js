const Helpers = require('../../helpers');

function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  return result.concat(left.length ? left : right);
}

function mergeSort(array) {
  if (array.length < 2) return array;

  var middle = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, middle));
  var right = mergeSort(array.slice(middle));

  return merge(left, right);
}

console.log(mergeSort(Helpers.unsorted).toString());
