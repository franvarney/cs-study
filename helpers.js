exports.swap = function (array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function makeSortedArray() {
  var sorted = [];
  for (var i = 65; i < 91; ++i) sorted.push(i);
  return sorted;
}

var sortedArray = makeSortedArray();

exports.sorted = sortedArray;

// Fisher-Yates shuffle
function makeUnsortedArray() {
  var arrayCopy = sortedArray.slice(); // copy
  var currentIndex = arrayCopy.length;

  while (currentIndex) {
    var randomIndex = Math.floor(Math.random() * currentIndex);
    --currentIndex;
    exports.swap(arrayCopy, currentIndex, randomIndex);
  }

  return arrayCopy;
}

var unsortedArray = makeUnsortedArray();

exports.unsorted = unsortedArray;
