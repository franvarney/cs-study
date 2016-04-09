const Assert = require('assert');
const Helpers = require('../../../helpers');
const Queue = require('../../../data-structures/queue');

function breathFirstSearch(tree, target) {
  var queue = new Queue();
  queue.enqueue(tree.root);

  while (!queue.isEmpty()) {
    var node = queue.dequeue();

    if (node.value == target) return true;

    for (var i = 0; i < node.children.length; ++i) {
      var child = node.children[i];

      if (child && !child.visited) {
        child.visited = true;
        queue.enqueue(child);
      }
    }
  }

  return false;
}

var tree = { // TODO replace with graph module later
  root: {
    value: 5,
    children: [
      { value: 2, children: [{ value: 1, children: [] }] },
      { value: 8, children: [{ value: 2, children: [{ value: 6, children: [] }] }]},
      { value: 10, children: [] }
    ]
  }
};

Assert.equal(breathFirstSearch(tree, 1), true);
Assert.equal(breathFirstSearch(tree, 100), false);
