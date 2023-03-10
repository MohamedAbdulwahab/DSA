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

  /* push: add a node to the end of a singly linked list */
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

  /* pop: remove the last node. */
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

  /* shift: remove the first node in the list */
  shift() {
    const currentHead = this.head;
    /* Empty list */
    if (this.isEmpty()) {
      return null;
    } else {
      /* List has at least one node */
      this.head = currentHead.next;
      this.length--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return currentHead;
    }
  }

  /* unshift: add a node to the beginning of a list */
  unshift(val) {
    const newNode = new Node(val);

    /* list is empty */
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /* list has at least one node */
      newNode.next = this.head;
      this.head = newNode;
    }
    /* increment the list's length */
    this.length++;

    return this;
  }

  /* get: returns the node at a given index */
  get(index) {
    /* invalid index */
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode = this.head;

      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return currentNode;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  /* set: change the value of a given node to a different value */
  set(index, value) {
    /* invalid index */
    if (index < 0 || index >= this.length) {
      return false;
    } else {
      let counter = 0;
      let currentNode = this.head;

      /* find the node at the given index */
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      /* set the value */
      currentNode.val = value;

      return true;
    }
  }

  /* insert: add a node at a specific index */
  insert(index, value) {
    /* invalid index */
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      /* inserting at the end of the list */
      this.push(value);
      return true;
    } else if (index === 0) {
      /* inseting at the beginning of the list */
      this.unshift(value);
      return true;
    } else {
      /* inserting at a specific index */
      let currentNode = this.head;
      let newNode = new Node(value);

      /* find the prior index */
      for (let i = 0; i < this.length; i++) {
        if (i === index - 1) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    /* increment the length of the list */
    this.length++;

    return true;
  }

  /* remove: delete a node at a specific index */
  remove(index) {
    /* invalid index */
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      /* delete the first node */
      this.shift(index);
      return true;
    } else if (index === this.length - 1) {
      /* delete the last node */
      this.pop(index);
      return true;
    } else {
      let currentNode = this.head;

      /* find the prior node */
      for (let i = 0; i < this.length; i++) {
        if (i === index - 1) {
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    /* decrement the length of the list */
    this.length--;

    return true;
  }

  /* reverse: reverses a list in-place */
  reverse() {
    /* get the current head */
    let currentNode = this.head;

    /* switch head and tail */
    this.head = this.tail;
    this.tail = currentNode;

    /* track the previous and next node */
    let previusNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      /* save a pointer to the next node */
      nextNode = currentNode.next;

      /* point the current node to the previous node */
      currentNode.next = previusNode;

      /* move previous node to next node (advance node) */
      previusNode = currentNode;

      /* move current node to the next node (advance node) */
      currentNode = nextNode;
    }

    return this;
  }

  /* displayList: print all the nodes in a singly linked list */
  displayList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}
