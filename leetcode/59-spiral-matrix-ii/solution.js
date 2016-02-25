// Answer #1
function buildLayer(n, lastValue, layer, matrix) {
  // top row - go left to right
  var count = layer - 1;
  while (++count < n) {
    matrix[layer][count] = lastValue++;
  }

  // right edge - go top + 1 to bottom - 1
  count = layer;
  while (++count < n) {
    matrix[count][n - 1] = lastValue++;
  }

  --lastValue; // undo last increment (corner value)

  // bottom row - go right - 1 to left
  count = n;
  while (--count > layer - 1) {
    matrix[n - 1][count] = lastValue++;
  }

  --lastValue; // undo last increment (corner value)

  // left edge - go bottom - 1 to top + 1
  count = n;
  while (--count > layer) {
    matrix[count][layer] = lastValue++;
  }

  return lastValue;
}

function initMatrix(n, matrix) {
  for (var i = 0; i < n; ++i) {
    var row = new Array(n);
    matrix[i] = row.fill(0);
  }
}

function generateMatrix(n) {
  if (!n) return [];
  if (n === 1) return [[1]];

  var matrix = new Array(n);

  initMatrix(n, matrix);

  var lastValue = 1, layer = 0;
  var half = Math.floor(n / 2);
  while (lastValue !== (n * n) && layer !== half) {
    lastValue = buildLayer(n - layer, lastValue, layer++, matrix);
  }

  if (n % 2 === 1) {
    matrix[half][half] = lastValue;
  }

  return matrix;
};

console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));
console.log(generateMatrix(6));

/*
  // Original sloppy solution

  function buildEdges(n, last, cnt, final) {
    n = n - cnt;

    // top row
    for (var i = cnt; i < n; ++i) {
      final[cnt][i] = last;
      ++last;
    }

    // if (cnt) --last;

    // right edge
    var count = cnt + 1;
    while (count < n) {
      final[count][n - 1] = last;
      ++last;
      ++count;
    }

    --last;

    // bottom row
    for (var i = n - 1; i > cnt - 1; --i) {
      final[n - 1][i] = last;
      ++last;
    }

    --last;

    // left edge
    var count = n - 1;
    while (count > cnt) {
      final[count][cnt] = last;
      ++last;
      --count;
    }

    return last;
  }

  var generateMatrix = function(n) {
    if (!n) return [];
    if (n === 1) return [[1]];

    var final = new Array(n);
    for (var i = 0; i < n; i++) {
      var row = new Array(n);
      final[i] = row.fill(0);
    }

    var last = 1;
    var count = 0;
    while (last !== Math.pow(n ,2) && count != Math.floor(n / 2)) {
      last = buildEdges(n, last, count, final);
      ++count;
    }

    if (n % 2 == 1) {
      final[Math.floor(n / 2)][Math.floor(n / 2)] = last;
    }

    return final;
  };
*/
