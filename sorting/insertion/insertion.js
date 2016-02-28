const Helpers = require('../../helpers');

function insertionSort(array) {
  for (var i = 0; i < array.length; ++i) {
    var j = i;

    while (j > -1 && array[j - 1] > array[j]) {
      Helpers.swap(array, j, j - 1);
      --j;
    }
  }

  return array;
}

console.log(insertionSort(Helpers.unsorted).toString());
