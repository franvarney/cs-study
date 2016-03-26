function multiplesThreeFive(n) {
  var total = 0, count = 0;

  while (count < n) {
    if (count % 3 == 0 || count % 5 == 0) total += count;
    ++count;
  }

  return total;
}

console.log(multiplesThreeFive(1000));
