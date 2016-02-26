Quick Sort
==========

Quick sort, also known as partition-exchange sort, is a divide and conquer
algorithm created by Tony Hoare in 1959. It can be two to three times faster
than merge sort and heap sort. It is not considered a stable sort.

Performance Case:
- Worst: O(n^2)
- Average: O(n log n)
- Best: O(n log n)

Space Complexity Case:
- Worst: O(n)

Pseudocode example:

```
initially call quickSort(array, 0, array.length - 1)
in quickSort, first get an index by calling partition(array, left, right)
in partition, get a pivot value (this is the middle value)
while left <= right, increment left if array[left] is les than pivot and decrement right if array[right] is greater than pivot
if left <= right then swap(array, left, right)
increment left and decrement right
after the partition is returned, call quickSort(array, left, partition - 1) if left is greater than index - 1
or if index greater than right, call quickSort(array, index, right)

```
