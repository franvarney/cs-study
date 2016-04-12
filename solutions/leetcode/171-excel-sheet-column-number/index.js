const Assert = require('assert');

const CHAR_START = 64; // treat as index 0 of uppercase alphabet

function charValue(value) {
  return value.charCodeAt() - CHAR_START;
}

function toPower(power) {
  return Math.pow(26, power);
}

function titleToNumber(s) {
  if (!s) return 0;

  if (s.length == 1) return charValue(s);

  var i = 0, sLength = s.length, total = 0;

  for (; i < sLength - 2; ++i) {
    total += toPower((sLength - 1) - i) * charValue(s[i]);
  }

  return total + (toPower(1) * charValue(s[sLength - 2])) + charValue(s[sLength - 1]);
}

Assert.equal(titleToNumber('AZ'), 52);
Assert.equal(titleToNumber('ACD'), 758);
