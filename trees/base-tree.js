'use strict';

class Tree {
  constructor() {
    this.root = null;
  }

  remove(value) {
    // TODO
  }

  size() {
    var length = 0;
    this.traverse(() => ++length);
    return length;
  }

  traverse(fn) {
    // will separate this out later
    function inOrder(node) {
      if (node.left) inOrder(node.left);
      if (node.right) inOrder(node.right);
      fn();
    }

    inOrder(this.root);
  }
}

module.exports = Tree;
