Operators
=========

## Bitwise

#### `&` AND
Returns a one in each bit position for which the corresponding bits of both
operands are ones.

```
  1011
& 1001
------
  1001

```

#### `|` OR
Returns a one in each bit position for which the corresponding bits of either or
both operands are ones.

```
  1011
& 1001
------
  1011

```

#### `^` XOR
Returns a one in each bit position for which the corresponding bits of either
but not both operands are ones.

```
  1011
& 1001
------
  0010

```

#### `~` NOT
Inverts the bits of its operand.

```
~0 = 1
~1 = 0
~53 = -54

```

#### `<<` Left Shift
Shifts a in binary representation b (< 32) bits to the left, shifting in zeroes
from the right.

```
9 << 2 = 36

1001 << 2 = 100100

```

#### `>>` Right Shift
Shifts a in binary representation b (< 32) bits to the right, discarding bits
shifted off.

```
9 >> 2 = 2

1001 >> 2 = 2

```

## Resources
- [The Math Forum - Negative Numbers in Binary](http://mathforum.org/library/drmath/view/55924.html)
- [UCSB CS - Practice with Bit Operations](https://www.cs.ucsb.edu/~pconrad/cs16/topics/bitOps/)
- [Mozilla - Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- [StackOverflow - Real World Use Cases of Bitwise Operators](http://stackoverflow.com/questions/2096916/real-world-use-cases-of-bitwise-operators)
