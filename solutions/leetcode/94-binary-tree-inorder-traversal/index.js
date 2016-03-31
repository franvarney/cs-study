const Assert = require('assert');
const Helpers = require('../../../helpers');

function inorderTraversal(root) {
  var items = [];

  function inorder(node) {
    if (node) {
      inorder(node.left);
      items.push(node.value);
      inorder(node.right);
    }

    return items;
  }

  return inorder(root);
};

var tree = Helpers.initTree([6,2,3,9,1,7]);
var results = inorderTraversal(tree.root);
Assert.deepEqual(results, [1,2,3,6,7,9]);

console.log(results);

// TODO: iterative version
