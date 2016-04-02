function lowestCommonAncestor (root, p, q) {
  if (p.val > q.val) return lowestCommonAncestor(root, q, p);
  if (root.val >= p.val && root.val <= q.val) return root;

  var node = root;

  while (node) {
    if (node.val >= p.val && node.val <= q.val) return node;
    if (node.val >= p.val) node = node.left;
    if (node.val < p.val) node = node.right;
  }
}
