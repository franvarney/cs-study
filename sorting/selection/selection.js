const Helpers = require('../../helpers');

console.time('selectionSort');

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; ++i) {
    var min = i;

    for (j = i + 1; j < array.length; ++j) {
      if (array[min] > array[j]) min = j;
    }

    if (min !== j) {
      Helpers.swap(array, min, i);
    }
  }

  return array;
}

console.log(selectionSort(Helpers.unsorted).toString());

console.timeEnd('selectionSort');
