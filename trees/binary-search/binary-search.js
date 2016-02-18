'use strict';

const Tree = require('../base-tree');

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    var current;
    var node = {
      value: value,
      left: null,
      right: null
    };

    if (!this.root) {
      this.root = node;
    } else {
      current = this.root;

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }
}

module.exports = BinarySearchTree;

// small example
var tree = new BinarySearchTree();

tree.add(6);
tree.add(2);
tree.add(3);
tree.add(9);
tree.add(1);
tree.add(7);

/*
      6
    2   9
   1 3 7
*/

console.log(JSON.stringify(tree, null, 2));
console.log('size', tree.size());
