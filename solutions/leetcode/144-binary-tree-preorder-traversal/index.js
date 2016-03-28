const Assert = require('assert');

function preorderTraversal(root) {
  var items = [];

  function preorder(node) {
    if (node) {
      items.push(node.val);
      preorder(node.left);
      preorder(node.right);
    }

    return items;
  }

  return preorder(root);
};

var tree = {
  val: 1,
  left: {
    val: 5
  },
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

var results = preorderTraversal(tree);
Assert.deepEqual(results, [1,5,2,3]);

console.log(results);

// TODO: iterative version
