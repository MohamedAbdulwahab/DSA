/* Node class */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Stack class */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* push: adds a node to the top of the stack */
  push(val) {
    /* create a new node */
    let newNode = new Node(val);

    /* stack is empty */
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /* stack contains at least one node */
      let oldFirst = this.first;

      this.first = newNode;
      newNode.next = oldFirst;
    }
    /* increment the stack size */
    this.size++;

    /* return the stack size */
    return this.size;
  }

  /* pop: removes the node on the top of the stack */
  pop() {
    /* the stack is empty */
    if (this.size === 0) {
      return null;
    }
    /* store the current first node */
    const oldFirst = this.first;

    /* the stack contains only one node */
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      /* stack contains more than one node */
      /* cut the old first out from the list */
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    /* decrement the stack size */
    this.size--;

    /* return the value of the removed node */
    return oldFirst.val;
  }
}
