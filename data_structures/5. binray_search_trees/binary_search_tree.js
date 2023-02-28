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

  /* find: searches for a value and returns the node if it's present in the BST, returns null otherwise */
  find(val) {
    /* tree is empty */
    if (this.root === null) {
      return false;
    }
    /* start from the root */
    let currentNode = this.root;
    let nodeIsFound = false;

    /* while the value has not been found AND there is still nodes in the BST */
    while (nodeIsFound === false && currentNode) {
      /* value is smaller than current node's value */
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        /* value is greater than current node's value */
        currentNode = currentNode.right;
      } else {
        /* value equals the current node's value */
        nodeIsFound = true;
      }
    }

    /* value does not exist in the BST */
    if (nodeIsFound === false) {
      return null;
    }

    /* node is found, return it */
    return currentNode;
  }

  /* BFS: Breadth First Search */
  BFS() {
    const queue = [];
    const visited = [];

    /* start at the root and traverse the BST */
    let currentNode = this.root;

    /* place the root node in the queue */
    queue.push(currentNode);

    /* while the queue is not empty */
    while (queue.length !== 0) {
      /* shift the current node from the queue */
      currentNode = queue.shift();
      /* add the shifted node to the visited array */
      visited.push(currentNode);

      /* check if the shifted node has a left child */
      if (currentNode.left) {
        /* place the left child in the queue */
        queue.push(currentNode.left);
      }
      /* check if the shifted node has a right child */
      if (currentNode.right) {
        /* place the right child in the queue */
        queue.push(currentNode.right);
      }
    }

    /* return the visited array */
    return visited;
  }

  /* DFSPreOrder: Depth First Search - Pre Order */
  DFSPreOrder() {
    /* store visited nodes */
    const visited = [];

    /* store the root node */
    let currentNode = this.root;

    function traverse(node) {
      visited.push(node);

      /* traverse the left nodes first */
      if (node.left) {
        traverse(node.left);
      }
      /* traverse the right nodes after */
      if (node.right) {
        traverse(node.right);
      }
    }

    /* invoke the traverse function with the current node */
    traverse(currentNode);

    /* return the visited nodes list */
    return visited;
  }
}
