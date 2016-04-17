'use strict';

const Assert = require('assert');

class Node {
  constructor(value, next) {
    this.value = value;
    next = next || null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  exists(node) {
    if (!node || !node instanceof Node)
      return new Error('A node is required');

    var current = this.head;

    while (current) {
      if (current == node) return true;
      current = current.next;
    }

    return false;
  }

  insertAfter(node, newNode) {
    if (!node || !node instanceof Node)
      return new Error('A node is required');
    if (!newNode || !newNode instanceof Node)
      return new Error('A new node is required');

    ++this.length;

    newNode.next = node.next;
    node.next = newNode;
    return;
  }

  insertBeginning(list, node) {
    if (!list || !list instanceof SinglyLinkedList)
      return new Error('A list is required');
    if (!node || !node instanceof Node)
      return new Error('A node is required');

    ++this.length;

    node.next = list.head;
    list.head = node;
    return;
  }

  insertEnd(node) {
    if (!node || !node instanceof Node)
      return new Error('A node is required');

    ++this.length;

    if (!this.head) {
      this.head = {
        value: node.value,
        next: node.next || null
      }

      return;
    }

    var current = this.head.next;
    if (!current) this.head.next = node;

    while (current) {
      if (!current.next) {
        current.next = node;
        return;
      }

      current = current.next;
    }

    return;
  }

  remove(node) {
    if (!node || !node instanceof Node) return new Error('A node is required');

    var current = this.head, parent;

    while (current) {
      if (current == node) {
        parent.next = current.next;
      }

      parent = current;
      current = current.next;
    }

    if (this.length > 0) --this.length;
  }
}

var array = [1,2,3,5];
var list = new SinglyLinkedList();

array.forEach((value) => {
  list.insertEnd(new Node(value));
});

Assert.equal(list.exists(list.head), true);

var startNode = new Node(0);
list.insertBeginning(list, startNode);
Assert.equal(list.exists(startNode), true);

var current = list.head;
var fourNode = new Node(4);
var test = [];

while (current) {
  if (current.value == 3) {
    list.insertAfter(current, new Node(4));
  }

  if (current.value == 4) {
    var node = current;
    Assert.equal(list.exists(node), true);
    list.remove(current);
  }

  Assert.equal(list.exists(fourNode), false);

  test.push(current.value);
  current = current.next;
}

test.shift();
array[3] = 4, array[4] = 5;
Assert.deepEqual(test, array, true);
