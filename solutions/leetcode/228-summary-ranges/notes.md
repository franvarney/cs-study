228. Summary Ranges
===================

## Question
Given a sorted integer array without duplicates, return the summary of its
ranges.

#### Examples
1. Given [0,1,2,4,5,7], return ["0->2","4->5","7"].

## Questions
Nothing particular stood out.

## Answer #1

#### Thoughts
There needs to be a check for when the range is just a single digit (ex. "7")
and additionally that same check, including the formatting of the range (the
"->") needs to happen once after the loop ends.

#### Complexity
  - Performance: O(n)
  - Space: O(n)
