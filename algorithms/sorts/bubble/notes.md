Bubble Sort
===========

Bubble sort is a simple comparison sorting algorithm that is also known as
sinking sort. It works by passing through the list of items, comparing items
to the left, repeatedly until no more swaps are needed. Despite being simple
it is too slow even when compared to insertion sort, however, it can be
practical if the input is mostly sorted.

Performance Case:
- Worst: O(n^2)
- Average: O(n^2)
- Best: O(n)

Space Complexity Case:
- Worst: O(1)

Pseudocode example:

```
loop through each value i in array
loop through each value from i to array length - 1
if array[i] is greater than array[i + 1] then swap the values
```
