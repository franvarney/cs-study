14. Longest Common Prefix
=========================

## Question
Write a function to find the longest common prefix string amongst an array of
strings.

#### Examples
1. ["prefrontal", "prefire", "prt", "pro"] shoud be "pr".
2. ["aaa", "aa", "aaa"] should be "aa".
3. ["prefrontal", "prefire", "pret", "preo"] should be "pre".

## Questions
Nothing particular came to mind for this problem.

## Answer #1

#### Thoughts
This seemed like an overall straight-forward question, but some things to
consider would be how to keep track of the prefix (and the previous version of it).
If using just a string, then characters need to be chopped off or added only in
certain cases.

I personally always try to exit early, so it made sense to me to get the prefix
using the first two words (if there are two words). This allows an early exit if
the length of strings is only 2 and also allows a jump start in the for loop.

#### Complexity
  - Performance: O(n^2)
  - Space: O(n)
