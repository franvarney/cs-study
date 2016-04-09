'use strict';

const Assert = require('assert');

class Queue {
  constructor() {
    this.elements = []; // Might consider a linked list as well
  }

  dequeue() {
    if (this.elements.length) return this.elements.shift();
  }

  enqueue(element) {
    if (!element) return new Error('Needs an element');
    this.elements.push(element);
  }

  isEmpty() {
    return !this.elements.length;
  }

  peek() {
    if (this.elements.length) return this.elements[0];
  }
}

module.exports = Queue;

function insertAll(array, queue) {
  array.forEach((item) => {
    queue.enqueue(item);
  });
}

var queue = new Queue();

Assert.equal(queue.isEmpty(), true, 'Queue should be empty');

insertAll([1,3,6,8], queue);

Assert.deepEqual(queue.elements, [1,3,6,8]);
Assert.equal(queue.dequeue(), 1);
Assert.equal(queue.isEmpty(), false, 'Queue should be empty');
Assert.equal(queue.peek(), 3);

