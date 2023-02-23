/* Node class */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Queue class */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* enqueue: adds a node to the end of the LL (end of the queue) */
  enqueue(val) {
    /* create a new node */
    let newNode = new Node(val);

    /* the queue is empty */
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /* the queue contains more than one node */
      /* get the last node */
      const oldLast = this.last;

      /* add the new node to the end */
      oldLast.next = newNode;
      this.last = newNode;
    }
    /* increment the queue size */
    this.size++;

    /* return the queue size */
    return this.size;
  }

  /* dequeue: removes a node from the beginning of the LL (beginning of the queue) */
  dequeue() {
    /* the queue is empty */
    if (this.size === 0) {
      return null;
    }
    /* store the current first node */
    const oldFirst = this.first;

    /* the queue contains only one node */
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      /* the queue contains more than one node */
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    /* decrement the queue size */
    this.size--;

    /* return the removed node */
    return oldFirst.val;
  }
}
