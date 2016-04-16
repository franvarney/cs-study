'use strict';

class CustomSet {
  constructor() {
    // might also consider using an array or tree, or even multiple data structures
    // depending on the item count
    this.elements = {};
    this.length = 0;
  }

  isExisting(value) {
    return this.elements[value] || false;
  }

  insert(value) {
    if (!value) return new Error('A value is required');

    var isExisting = this.isExisting(value);

    if (!isExisting) {
      ++this.length;
      this.elements[value] = true;
    }
  }

  remove(value) {
    if (!value) return new Error('A value is required');

    var isExisting = this.isExisting(value);

    if (!isExisting) return new Error('Value doesn\'t exist');

    if (isExisting) {
      delete this.elements[value];
      --this.length;
    }
    else return new Error('Nothing deleted');
  }
}

function insertAll(array, set) {
  array.forEach((item) => {
    set.insert(item);
  });
}

var set = new CustomSet();

insertAll([1,3,6,8], set);
console.log('customSet:insert', set);

set.remove(6);
console.log('customSet:remove', set);

console.log('customSet:isExisting', set.isExisting(6)); // false

console.log('customSet:isExisting', set.isExisting(1)); // true
