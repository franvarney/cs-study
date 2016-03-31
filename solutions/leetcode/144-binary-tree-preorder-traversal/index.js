const Assert = require('assert');
const Helpers = require('../../../helpers');

function preorderTraversal(root) {
  var items = [];

  function preorder(node) {
    if (node) {
      items.push(node.value);
      preorder(node.left);
      preorder(node.right);
    }

    return items;
  }

  return preorder(root);
};

var tree = Helpers.initTree([6,2,3,9,1,7]);
var results = preorderTraversal(tree.root);
Assert.deepEqual(results, [6,2,1,3,9,7]);

console.log(results);

// TODO: iterative version
