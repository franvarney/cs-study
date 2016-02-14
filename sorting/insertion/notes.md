Insertion Sort
==============

Insertion sort is a sorting algorithm that builds the final array one item at a time, comparing the left. Like other simple arrays, it is inefficient, but may be used on small or mostly sorted datasets. It is, however, the fastest sorting algorithm for small arrays (around size 10).

Performance Case:
- Worst: O(n^2)
- Average: O(n^2)
- Best: O(n)

Space Complexity Case:
- Worst: O(n)

Pseudocode example:

```
loop through each value i in array
set value j to i
while j is greater than -1 and array[j - 1] is greater than array[j], swap array[j] and array[j - 1] and decrement j by 1
```
