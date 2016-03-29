const Assert = require('assert');

function inorderTraversal(root) {
  var items = [];

  function inorder(node) {
    if (node) {
      inorder(node.left);
      items.push(node.val);
      inorder(node.right);
    }

    return items;
  }

  return inorder(root);
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

var results = inorderTraversal(tree);
Assert.deepEqual(results, [5,1,3,2]);

console.log(results);

// TODO: iterative version
