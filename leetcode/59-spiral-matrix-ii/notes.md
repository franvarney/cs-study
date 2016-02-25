59. Spiral Matrix II
====================

## Question
Given an integer n, generate a square matrix filled with elements from 1 to n^2
in spiral order.

#### Examples
1. Given n = 3

```
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

## Questions
1. The example is clockwise, should I assume all spirals will be clockwise?

## Answer #1

#### Thoughts
When I first started thinking about this problem, I immediately wanted to take
advantage of the fact that there were layers of cubes. So my idea was to make a
loop that decremented `n` like it was peeling off a layer. And before every
layer was peeled off, the layer was built edge by edge (top, right, bottom, left).
To do this, I also tracked the last value inserted into the matrix so I knew
what my starting value was on each layer or cube.

#### Complexity
  - Performance: O(n^2)
  - Space: O(n^2)
