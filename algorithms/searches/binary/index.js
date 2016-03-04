const Helpers = require('../../../helpers');

function midpoint(min, max) {
  return Math.floor((max + min) / 2);
}

function binarySearch(array, target, min, max) {
  while (min <= max) {
    var middle = midpoint(min, max);

    if (array[middle] === target) return middle;
    else if (array[middle] < target) min = middle + 1;
    else max = middle - 1;
  }

  return -1;
}

var sorted = Helpers.sorted;
console.log(binarySearch(sorted, 72, 0, sorted.length - 1));
