const Helpers = require('../../../helpers');

var output = [];

function postorder(node) {

  if (node) {
    postorder(node.left);
    postorder(node.right);
    output.push(node.value);
  }

  return output;
}

var tree = Helpers.initTree([6,2,3,9,1,7]);

console.log(postorder(tree.root).toString());
