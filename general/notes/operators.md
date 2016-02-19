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


