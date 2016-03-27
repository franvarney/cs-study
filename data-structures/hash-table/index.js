'use strict';

class HashTable {
  constructor(capacity) {
    this.capacity = parseInt(capacity, 10); // Often known as `m`
    this.length = 0; // Often known as `n`

    // In JavaScript, it's unnecessary to define the size or capacity of the
    // array, but for clarity's sake, the size will be set
    this.keys = new Array(parseInt(capacity, 10));
    this.values = new Array(parseInt(capacity, 10));
  }

  find(key) {
    if (!key) return new Error('A key is required');

    var i = this._hash(key);
    for (; this.keys[i] != null; i = (i + 1) % this.capacity) {
      if (keys[i] == key) return values[i];
    }
  }

  // String hashing function
  _hash(key) {
    if (!key) return new Error('A key is required');

    var hash = 0, i = 0;

    if (typeof key === 'string') key = key.toString();

    for (; i < key.length; ++i) {
      char = key.charCodeAt(i);
      hash = (((hash << 5) - hash) + char) % this.capacity;
      hash |= 0; // Convert to 32-bit integer
    }

    return hash;
  }

  insert(key, value) {
    if (!key) return new Error('A key is required');

    // Double table size if 50% full
    if (this.length >= (this.capacity / 2)) this._resize(2 * this.capacity);

    var i = this._hash(key);
    for (; this.keys[i] != null; i = (i + 1) % this.capacity) {
      if (this.keys[i] == key) {
        this.values[i] = value;
        return;
      }
    }

    this.keys[i] = key;
    this.values[i] = value;
    ++this.length;

    return;
  }

  isEmpty() {
    return !this.size();
  }

  size() {
    return this.length;
  }

  remove(key) {
    if (!key) return new Error('A key is required');
    if (!contains(key)) return;

    // Find position of key
    var i = this._hash(key);
    while (key != this.keys[i]) i = (i + 1) % this.capacity;

    // Delete key and associated value
    this.keys[i] = null;
    this.values[i] = null;

    // Rehash all keys
    i = (i + 1) % this.capacity;
    while (this.keys[i]) {
      var keyToRehash = this.keys[i];
      var valueToRehash = this.vals[i];

      this.keys[i] = null;
      this.values[i] = null;
      --this.length;

      this.insert(keyToRehash, valueToRehash);
      i = (i + 1) % this.capacity;
    }

    --this.length;

    // Reduces the size of array
    if (this.legnth > 0 && this.length <= (this.capacity / 8)) {
      this._resize(this.capacity / 2);
    }
  }

  _resize(capacity) {
    var tempTable = new HashTable(capacity);

    var i = 0;
    for (; i < this.capacity; ++i) {
      if (this.keys[i]) tempTable.insert(this.keys[i], this.values[i]);
    }

    this.keys = tempTable.keys;
    this.values = tempTable.values;
    this.capacity = tempTable.capacity;
  }
}

// Initialize new table
var citiesHashTable = new HashTable(4);
console.log('hashTable:init', citiesHashTable); // capacity = 4, length = 0

// Check if empty
console.log(citiesHashTable.isEmpty()); // true

// Add 'Chicago' to table
citiesHashTable.insert(1, 'Chicago');
console.log('hashTable:insert', citiesHashTable);

// Check size
console.log(citiesHashTable.size()); // 1

// Check if empty
console.log(citiesHashTable.isEmpty()); // false

// Add 'San Francisco' and 'Pittsburgh'
citiesHashTable.insert(2, 'San Francisco');
console.log('hashTable:insert', citiesHashTable); // capacity = 4, length = 2
citiesHashTable.insert(3, 'Pittsburgh');
console.log('hashTable:insert', citiesHashTable); // capacity = 8, length = 3

// Check size
console.log(citiesHashTable.size()); // 3
