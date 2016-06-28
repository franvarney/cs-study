const Assert = require('assert')

function reverseString(s) {
  if (!s || s.length == 1) return s

  var result = '', length = s.length

  for (var i = length - 1; i >= 0; --i) {
    result += s[i]
  }

  return result
}

Assert.equal(reverseString('test'), 'tset')
Assert.equal(reverseString('011023'), '320110')
