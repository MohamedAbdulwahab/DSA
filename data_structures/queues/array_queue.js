/* ****************************************************************************************************
 * Note: In this implementation, the runtime of the dequeue operation is O(n); Which actually         *
 * defeats the purpose of using a queue because it has an O(1) runtime for both insert and remove.    *
 * to fix this issue, I have implemented a queue class using a linked list which results in an O(1)   *
 * runtime for both of the enqueue and dequeue operations 											                      *
 * ************************************************************************************************** */

/* Queue class */
class Queue {
  constructor() {
    this.queue = [];
  }

  /* enqueue: adds an item to the back of the queue */
  enqueue(val) {
    return this.queue.push(val);
  }

  /* dequeue: removes and item from the beginning of the queue */
  dequeue() {
    return this.queue.shift();
  }

  /* peek: returns the item at the front of the queue */
  peek() {
    return this.queue[0];
  }

  /* isEmpty: returns the size of the queue */
  isEmpty() {
    return this.queue.length === 0;
  }
}
