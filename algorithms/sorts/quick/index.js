const Helpers = require('../../../helpers');

function partition(array, left, right) {
  var pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (array[left] < pivot) ++left;
    while (array[right] > pivot) --right;
    if (left <= right) Helpers.swap(array, left++, right--);
  }

  return left;
}

function quickSort(array, left, right) {
  if (array.length > 1) {
    var index = partition(array, left, right);

    if (left < index - 1) quickSort(array, left, index - 1);
    if (index < right) quickSort(array, index, right);
  }

  return array;
}

var unsorted = Helpers.unsorted;
console.log(quickSort(unsorted, 0, unsorted.length - 1).toString());
