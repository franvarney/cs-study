const Assert = require('assert');
const Stack = require('../../../data-structures/stack');

function depthFirstSearch(tree, target) {
  var stack = new Stack();
  stack.push(tree.root);

  while (!stack.isEmpty()) {
    var node = stack.pop();

    if (node.value == target) return true;

    for (var i = 0; i < node.children.length; ++i) {
      var child = node.children[i];

      if (child && !child.visited) {
        child.visited = true;
        stack.push(child);
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

Assert.equal(depthFirstSearch(tree, 1), true);
Assert.equal(depthFirstSearch(tree, 100), false);
