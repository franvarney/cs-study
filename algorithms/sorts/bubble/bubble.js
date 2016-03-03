const Helpers = require('../../../helpers');

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j > -1; --j) {
      if (array[j] > array[j + 1]) {
        Helpers.swap(array, j, j + 1);
      }
    }
  }

  return array;
}

console.log(bubbleSort(Helpers.unsorted).toString());
