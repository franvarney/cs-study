// Answer #1
function compare(current, next) {
  var prefix = next;

  for (var j = 0; j < next.length; ++j) {
    // if current[j] is not undefined and it equals prefix[j]
    if (current[j] && current[j] === prefix[j]) {
      // only add a character if next and prefix are different
      if (next !== prefix) {
        prefix += current[j];
      }
    } else if (current[j] !== prefix[j]) {
      // chop of the characters past index j
      prefix = prefix.substring(0, j);
    }
  }

  return prefix;
}

function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  // if there's only one word, it is the longest prefix
  if (strs.length === 1) return strs.toString();

  // get a headstart
  var prefix = compare(strs[0], strs[1]);

  // now that we had prefix, we can exit early when there are only 2 strings
  if (strs.length === 2) return prefix;

  for (var i = 2; i < strs.length; ++i) {
    prefix = compare(strs[i], prefix);
  }

  return prefix;
}

console.log(longestCommonPrefix(['prefrontal', 'prefire', 'prt', 'pro']));
console.log(longestCommonPrefix(['aaa', 'aa', 'aaa']));
console.log(longestCommonPrefix(['prefrontal', 'prefire', 'pret', 'preo']));

/*
  // Original sloppy solution

  function compare(current, next) {
    var prefix = '';

    for (var j = 0; j < current.length; ++j) {
      if (current[j] === next[j]) prefix += current[j];
      else break;
    }

    return prefix;
  }

  function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    if (strs.length === 1) return strs.toString();

    var prefix = compare(strs[0], strs[1]);

    if (strs.length === 2) return prefix;

    for (var i = 2; i < strs.length; ++i) {
      var word = strs[i];

      for (var j = 0; j < prefix.length; ++j) {
        if (word[j] === prefix[j]) {
          if (word.substring(0, j - 1).length === prefix.length) {
            prefix += word[j];
          }
        } else if (word[j] !== prefix[j]) {
          if (word.substring(0, j - 1) !== prefix) {
            prefix = prefix.substring(0, j);
          }
        }
      }
    }

    return prefix;
  }
*/
