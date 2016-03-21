function evenFibonacciNumbers(n) {
  var last = 0, secondLast = 1;
  var total = 0;

  while (last < n + 1) {
    if (last % 2 == 0) total += last;

    var temp = last;
    secondLast = (last += secondLast, temp);
  }

  return total;
}

console.log(evenFibonacciNumbers(4000000));
