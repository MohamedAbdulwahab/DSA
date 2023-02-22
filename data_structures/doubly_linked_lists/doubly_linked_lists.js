/* Node class */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/* Doubly linked list class */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* isEmpty: check empty list. */
  isEmpty() {
    return this.length === 0;
  }

  /* push: add a new node to the end of the list */
  push(val) {
    /* create a new node */
    let newNode = new Node(val);

    /* the node to add is the first node in the list */
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /* the node to add is NOT the first node in the list */
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    /* increment the length */
    this.length++;

    return this;
  }

  /* shift: remove the first node in the list */
  shift() {
    /* list is empty */
    if (this.isEmpty()) {
      return null;
    }

    /* store the old head (node to be removed) */
    let oldHead = this.head;

    /* list has only one node */
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      /* list contains more than one node */
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    /* decrement the length */
    this.length--;

    return oldHead;
  }

  /* displayList: prints all the nodes in a doubly linked list. */
  displayList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}
