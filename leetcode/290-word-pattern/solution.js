// Answer #1
function wordPattern(pattern, str) {
  var words = str.split(' ');
  var pMap = {};
  var sMap = {};

  if (pattern.length !== words.length) return false;

  for (var i = 0; i < pattern.length; ++i) {
    if (!pMap[pattern[i]]) pMap[pattern[i]] = words[i];
    if (!sMap[words[i]]) sMap[words[i]] = pattern[i];

    if (pMap[pattern[i]] !== words[i] ||
        sMap[words[i]] !== pattern[i]) return false;
  }

  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
