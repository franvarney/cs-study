Merge Sort
==========

Merge sort is a comparison based sorting, divide and conquer algorithm written
by John von Neumann. While usually faster than quick sort, merge sort may be
quicker if the data is accessed sequentially.

Performance Case:
- Worst: O(n log n)
- Average: O(n log n)
- Best: O(n log n)

Space Complexity Case:
- Worst: O(n)

Pseudocode example:

```
if array length is less than 2, return array
get the middle of array length
get the left half of the array and get the right half of the array
  with the middle as the pivot
call merge(left, right)
in merge, while left and right lengths are greater than 0
put the first value in left in a new array called result if the first value in
  left in larger than the first in right otherwise right the first value in right
  in result
if left length > 0 then concat left to result otherwise concat right
```
