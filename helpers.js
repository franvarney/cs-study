const BinarySearchTree = require('./data-structures/trees/binary-search');

exports.swap = function (array, a, b) {
  var temp = array[a];
  array[b] = (array[a] = array[b], temp);
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
    exports.swap(arrayCopy, --currentIndex, randomIndex);
  }

  return arrayCopy;
}

var unsortedArray = makeUnsortedArray();

exports.unsorted = unsortedArray;

exports.initTree = function (array) {
  if (!array) array = unsortedArray;

  var tree = new BinarySearchTree();

  array.forEach((value) => tree.add(value));

  return tree;
};
