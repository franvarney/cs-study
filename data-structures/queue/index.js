'use strict';

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

function insertAll(array, queue) {
  array.forEach((item) => {
    queue.enqueue(item);
  });
}

var queue = new Queue();

console.log('queue:isEmpty', queue.isEmpty()); // true

insertAll([1,3,6,8], queue);
console.log('queue:insert', queue); // 1,3,6,8

queue.dequeue();
console.log('queue:remove', queue); // 3,6,8

console.log('queue:isEmpty', queue.isEmpty()); // false

console.log('queue:peek', queue.peek()); // 3
