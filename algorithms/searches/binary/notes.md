Binary Search
=============

Binary Search, also known as half-interval search, is a dichotomic (operates by
selecting between two distinct alternatives at each iteration) divide and conquer
algorithm that finds the position of a target within a sorted array.

Performance Case:
- Worst: O(log n)
- Average: O(log n)
- Best: O(1)

Space Complexity Case:
- Worst: O(1)

Pseudocode example:

```
let min = 0 and max equal array length - 1
while min <= max
get the middle index by averaging min and max
if array[middle] is the target return true
if it's less than the target, let min = middle + 1
otherwise, max = middle - 1
```

## Resources
- [Wikipedia - Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
