Linear Search
=============

Linear search, also known as sequential search, is a way of finding a value in a
list by checking each element until the desired element is found or every value
is checked. Linear search is a the simplest search algorithm and considered to be
brute-force, but is practical for small lists. However, a binary search will still
be faster on sorted arrays unless the the target value is near the start of the
sorted array.

Performance Case:
- Worst: O(n)
- Average: O(n)
- Best: O(1)

Space Complexity Case:
- Worst: O(1)

Pseudocode example:

```
for each item in the list
if the item is equal to the desired value, return the value's index
otherwise return -1 (not found)
```
