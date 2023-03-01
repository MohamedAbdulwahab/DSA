class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /* insert: adds a node to its correct position in a maxHeap */
  enqueue(val, priority) {
    /* create a new node to insert in the priority queue */
    const newNode = new Node(val, priority);

    /* push the new value to the values array */
    this.values.push(newNode);

    /* move the new value to its correct position in the maxHeap array */
    this.bubbleUp();
  }

  /* bubbleUp: places the newly inserted value into its correct position in the max heap */
  bubbleUp() {
    /* find the index of the newly inserted value */
    let newValIndex = this.values.length - 1;

    /* find the value of the newly inserted value into the maxHeap array */
    const newValue = this.values[newValIndex];

    while (newValIndex > 0) {
      /* find the parent index of the newly inserted value */
      let parentIndex = Math.floor((newValIndex - 1) / 2);

      /* find the value of the parent of the newly inserted value */
      let parentValue = this.values[parentIndex];

      /* the newly inserted value is less than the value of its parent */
      if (newValue.priority <= parentValue.priority) {
        /* the newly inserted value is in its correct place: exist the while loop */
        break;
        /* the newly inserted value is greater than the value of its parent */
      } else {
        /* swap the newly inserted value with the value of its parent in the maxHeap array */
        [this.values[newValIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[newValIndex],
        ];

        /* update the newValIndex to become the new parentIndex */
        newValIndex = parentIndex;
      }
    }
  }

  /* extractMax: removes the max value in the maxHeap, returns it, and rearrages the maxHeap into its correct arrangement */
  dequeue() {
    /* swap the max value with the last value in the heap */
    [[this.values[0]], [this.values[this.values.length - 1]]] = [
      [this.values[this.values.length - 1]],
      [this.values[0]],
    ];

    /* store the maximum value (value to be removed) */
    const oldMaxValue = this.values.pop();

    /* place the new value at the top of the heap into its correct position */
    this.bubbleDown();

    /* return the removed value */
    return oldMaxValue;
  }

  /* bubbleDown: places the top value in the max heap into its correct position */
  bubbleDown() {
    /* store the index of the parent */
    let parentIdex = 0;

    while (true) {
      /* break the while loop if there is no swap performed */
      let swapIndex = null;

      /* store the value of the parent */
      const parentValue = this.values[parentIdex];

      /* find the index of the left child of the parent */
      let leftChildIndex = 2 * parentIdex + 1;
      /* find the index of the right child of the parent */
      let rightChildIndex = 2 * parentIdex + 2;

      /* store the value of the left child */
      let leftChildValue;
      /* store the value of the right child */
      let rightChildValue;

      /* check if the left child is in bound of the array */
      if (leftChildIndex < this.values.length) {
        /* store the value of the left child */
        leftChildValue = this.values[leftChildIndex];

        /* check if the left child is greater than the parent */
        if (leftChildValue.priority > parentValue.priority) {
          /* set swap to the index of the left child */
          swapIndex = leftChildIndex;
        }
      }

      /* check if the right child is in bound of the array */
      if (rightChildIndex < this.values.length) {
        /* store the value of the right child */
        rightChildValue = this.values[rightChildIndex];

        /* In order to set the swap value here we have consider two cases: 
				1. left child is less than the parent AND the right child is greater than the parent.
				2. left child is greater than the parent (swap = leftChild Value) AND thr right child is greater than the left child.
			*/
        if (
          (swapIndex === null &&
            rightChildValue.priority > parentValue.priority) ||
          (swapIndex !== null &&
            rightChildValue.priority > leftChildValue.priority)
        ) {
          /* set swap to the index of the left child */
          swapIndex = rightChildIndex;
        }
      }

      /* no swap was performed: we are done */
      if (swapIndex === null) {
        break;
      } else {
        /* swap the parent and the child stored in the swap variable */
        this.values[parentIdex] = this.values[swapIndex];
        this.values[swapIndex] = parentValue;

        /* update the parent index (becomes the swap index) */
        parentIdex = swapIndex;
      }
    }
  }
}
