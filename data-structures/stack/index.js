'use strict';

const Assert = require('assert');

class Stack {
  constructor() {
    this.elements = [];
  }

  pop() {
    if (this.elements.length) return this.elements.pop();
  }

  push(element) {
    if (!element) return new Error('Needs an element');
    this.elements.push(element);
  }

  isEmpty() {
    return !this.elements.length;
  }
}

function insertAll(array, stack) {
  array.forEach((item) => {
    stack.push(item);
  });
}

var stack = new Stack();

Assert.equal(stack.isEmpty(), true, 'Stack should be empty');

insertAll([1,3,6,8], stack);

Assert.deepEqual(stack.elements, [1,3,6,8]);
Assert.equal(stack.pop(), 8);
Assert.equal(stack.isEmpty(), false, 'Stack should be empty');
