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

  /* unshift: add a node to the beginning of a list */
  unshift(val) {
    /* create a new node to be added as the head of the list */
    let newNode = new Node(val);

    /* empty list */
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /* list contains at least one node */
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    /* increment the length */
    this.length++;

    return this;
  }

  /* get: return the node at a given index in a list */
  get(index) {
    let currentNode;
    let counter;

    /* invalid index */
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index <= Math.floor(this.length / 2)) {
      /* node is in the first half of the list (closer to the head) */
      /* set counter to the index of the first node and set current node to the head */
      counter = 0;
      currentNode = this.head;

      for (let i = 0; i <= Math.floor(this.length / 2); i++) {
        if (index === counter) {
          return currentNode;
        }
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      /* node is in the second half of the list (closer to the tail) */
      /* set counter to the index of the last node and set current node to the tail */
      counter = this.length - 1;
      currentNode = this.tail;

      for (let i = this.length - 1; i > Math.floor(this.length / 2); i--) {
        if (index === counter) {
          return currentNode;
        }
        currentNode = currentNode.prev;
        counter--;
      }
    }
  }

  /* set: changes the value of a given node at a specific index to a different value */
  set(index, val) {
    /* find the node by passing thr given index into the set method */
    let Node = this.get(index);

    /* index points to a valid node */
    if (Node) {
      /* set the value of the node */
      Node.val = val;

      return true;
    } else {
      /* the index passed is invalid */
      return false;
    }
  }

  /* insert: adds a node at a specific index to a list */
  insert(index, val) {
    /* invalid index */
    if (index < 0 || index > this.length) {
      return false;
    }

    /* insert the node at the beginning of the list */
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      /* indert the node at the end of the list */
      this.push(val);
    } else {
      /* insert the node at a specific position in the list */
      /* create the node to be inserted */
      let newNode = new Node(val);

      /* use the get method to find the position to insert the node at */
      let previousNode = this.get(index - 1);
      let nextNode = previousNode.next;

      /* create the proper connections */
      previousNode.next = newNode;
      newNode.prev = previousNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      /* increment the length */
      this.length++;
    }

    return true;
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
