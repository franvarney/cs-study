Hash Table
==========

A hash table or hash map is a data structure used to implement an associative
array, which maps keys to values. Ideally, the hash function will assign each
key to a unique bucket, but it is possible that two keys will generate an
identical hash causing both keys to point to the same bucket. Instead, most hash
table designs assume that hash collisions, where different keys that are assigned
by the hash function to the same bucket, will occur and must be accommodated.
In many situations, hash tables can be more efficient than search trees or
other table lookup structures.

## Complexity
- Space
  - Average: O(n)
  - Worst: O(n)
- Search
  - Average: O(1)
  - Worst: O(n)
- Insert
  - Average: O(1)
  - Worst: O(n)
- Delete
  - Average: O(1)
  - Worst: O(n)

## Usage
- Associative arrays
- Database Indexing
- Caches
- Sets

## Collision Resolution

### Separate Chaining
With this method, each bucket is independent, and has a list (linked list, array,
self-balancing tree, etc) of entries with the same index. The time for hash
table operations is the time to find the bucket (constant) plus the time for the
list operation. In a good hash table, each bucket has zero or one entries, and
sometimes two or three, but rarely more than that.

### Open Addressing
In this method, all entry records are stored in the bucket array itself. When a
new entry has to be inserted, the buckets are examined, starting with the
hashed-to slot and proceeding in some probe sequence, until an unoccupied slot
is found. The name "open addressing" refers to the fact that the location ("address")
of the item is not determined by its hash value.

#### Types of Sequences:
- Linear Probing
- Quadratic Probing
- Double Hashing

## Pros
- Speed, which is more apparent when the number of entries is large.
- When the set of key-value pairs is fixed and known ahead of time, one may
reduce the average lookup cost by a careful choice of the hash function.

## Cons
- Not good for string processing applications.
- Becomes inefficient when there are many collisions.

## Resources
- [Auckland CS](https://www.cs.auckland.ac.nz/software/AlgAnim/hash_tables.html)
- [Princeton CS](http://algs4.cs.princeton.edu/34hash)
  - [Linear Probing Example](http://algs4.cs.princeton.edu/34hash/LinearProbingHashST.java.html)
- [SparkNotes](http://www.sparknotes.com/cs/searching/hashtables/section1.rhtml)
- [StackOverflow](http://stackoverflow.com/questions/730620/how-does-a-hash-table-work)
- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
