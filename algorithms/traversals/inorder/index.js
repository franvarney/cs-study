const Helpers = require('../../../helpers');

var output = [];

function inorder(node) {

  if (node) {
    inorder(node.left);
    output.push(node.value);
    inorder(node.right);
  }

  return output;
}

var tree = Helpers.initTree([6,2,3,9,1,7]);

console.log(inorder(tree.root).toString());
