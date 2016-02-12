function makeSortedArray() {
  var sorted = [];

  for (var i = 65; i < 91; ++i) {
    sorted.push(i);
  }

  return sorted;
}

var sortedArray = makeSortedArray();

exports.sorted = sortedArray;

// Fisher-Yates shuffle
function makeUnsortedArray() {
  var newArray = sortedArray.slice();
  var currentIndex = newArray.length, temp, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }

  return newArray;
}

var unsortedArray = makeUnsortedArray();

exports.unsorted = unsortedArray;

exports.swap = function (array, val1, val2) {
  var temp = array[val1];
  array[val1] = array[val2];
  array[val2] = temp;
}
