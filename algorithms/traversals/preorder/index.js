const Helpers = require('../../../helpers');

var output = [];

function preorder(node) {

  if (node) {
    output.push(node.value);
    preorder(node.left);
    preorder(node.right);
  }

  return output;
}

var tree = Helpers.initTree([6,2,3,9,1,7]);

console.log(preorder(tree.root).toString());
