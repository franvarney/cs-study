Week 0
======

## Part 1

#### Binary
While people are accustomed to the decimal system, which uses 10 digits, 0-9,
computers use just 2, 0 and 1.

An example of the decimal system for the number `123`:

| 100      | 10      | 1       |
|--------- |-------- |-------  |
| 1        | 2       | 3       |
| 100 x 1  | 10 x 2  | 1 x 3   |

Binary works the same but uses powers of 2. So `28` would be:

| 16      | 8       | 4       | 2       | 1       |
|-------- |-------  |-------  |-------- |-------  |
| 1       | 1       | 1       | 0       | 0       |
| 16 x 1  | 8 x 1   | 4 x 1   | 2 x 0   | 1 x 0   |

Numbers can represent other information like ASCII (`65` to `A`, `66` to `B`, etc),
video, images, RGB, etc.

#### Algorithms
An algorithm is a process or set of instructions that takes inputs and outputs
(or the solution).

##### Phone book example
When searching for "Mike Smith", we could look at each page in order, one by one.
This works, but is very slow.

We could also flip two pages at a time, making it twice as fast, but might miss
Mr. Smith, since we are skipping pages.

But when looking for someone, we usually open to the middle, knowing that the
phone book is sorted alphabetically. If you only keep the half that contains
"Mike Smith", it would only take a few steps to find him.

Pseudocode example:

```
pick up phone book
open to middle of phone book
look at names
if "Smith" is among names
  call Mike
else if "Smith" is earlier in book
  open to middle of left half of book
  go to line 3
else if "Smith" is later in book
  open to middle of right half of book
 go to line 3
else
 give up
```
