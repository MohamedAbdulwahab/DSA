/* Node class */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* Binary Search Tree (BST) class */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* insert: adds a new node into its correct place in the BST */
  insert(val) {
    /* create a new node */
    const newNode = new Node(val);

    /* tree is empty */
    if (this.root === null) {
      /* new node becomes the root */
      this.root = newNode;
      /* return the entire tree */
      return this;
    } else {
      /* tree contains at least one node */
      /* start at the root */
      let currentNode = this.root;

      while (true) {
        /* handle duplicate values */
        if (val === currentNode.val) {
          return null;
        }

        /* the value of the new node is less than the current node */
        if (val < currentNode.val) {
          /* the current node does not have a left child */
          if (currentNode.left === null) {
            /* insert the new node as the left child */
            currentNode.left = newNode;
            return this;
          } else {
            /* the current node has a left child - move to the left */
            currentNode = currentNode.left;
          }
          /* the value of the new node is greater than the current node */
        } else if (val > currentNode.val) {
          /* the current node does not have a right child */
          if (currentNode.right === null) {
            /* insert the new node as the right child */
            currentNode.right = newNode;
            return this;
          } else {
            /* the current node has a right child - move to the right */
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
}
