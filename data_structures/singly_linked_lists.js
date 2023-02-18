/* Write an implementation of a singly linked list class in JS */

/* Node */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Singly Linked List Class */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* check empty list. */
  isEmpty() {
    return this.length === 0;
  }

  /* push a node into a singly linked list */
  push(val) {
    const newNode = new Node(val);

    // the node is the first node in the list.
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    // the node is NOT the first node in the list.
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment the list's length
    this.length++;

    // return the list
    return this;
  }

  /* remove (pop) the last node. */
  pop() {
    /* list is empty */
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      /* there is one node in the list */
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      /* There are multiple nodes in the list */
      let currentNode = this.head;
      let newTail = currentNode;

      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return currentNode;
    }
  }

  /* display all the nodes in a singly linked list. */
  displayList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}
