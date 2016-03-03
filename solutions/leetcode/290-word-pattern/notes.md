290. Word Pattern
=================

## Question
Given a pattern and a string `str`, find if `str` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter
in pattern and a non-empty word in `str`.

#### Examples
1. pattern = "abba", str = "dog cat cat dog" should return true.
2. pattern = "abba", str = "dog cat cat fish" should return false.
3. pattern = "aaaa", str = "dog cat cat dog" should return false.
4. pattern = "abba", str = "dog dog dog dog" should return false.

#### Notes
You may assume pattern contains only lowercase letters, and `str` contains
lowercase letters separated by a single space.

## Questions
1. Can I assume the length of `pattern` and the amount of words in `str` are
the same?

## Answer #1

#### Thoughts
When solving this problem this time, my thoughts were a bit jumbled as I had
previously looked at (but not solved) this problem some months ago. I relied
too much on memory and forgot some edge cases like example #4.

In my opinion the biggest case to recognize, are examples #2 and #4, where the
a character equals multiple words or a multiple characters equal the same word.
It's important to check that a character equals a word AND that the same word
equals that character.

#### Complexity
  - Performance: O(n)
  - Space: O(n)
