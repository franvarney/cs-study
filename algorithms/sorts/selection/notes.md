Selection Sort
==============

Selection sort is an in place comparison sort. On large datasets it performs
worse than insertion sort, but has an advantage over complicated algorithms
when auxiliary memory is limited. It usually out performs bubble sort.

Performance Case:
- Worst: O(n^2)
- Average: O(n^2)
- Best: O(n^2)

Space Complexity Case:
- Worst: O(n)

Pseudocode example:

```
loop through each value i in array
store value i as min
loop through each value j (i + 1)  to array length - 1
if array[min] is greater than array[j] then set min to j
after inner loop completes, swap array[min] and array[j]
```

### Resources
- [Wikipedia - Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
