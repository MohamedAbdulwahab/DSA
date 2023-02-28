class maxHeap {
  constructor() {
    this.values = [];
  }

  /* insert: adds a node to its correct position in a maxHeap */
  insert(val) {
    /* push the new value to the values array */
    this.values.push(val);

    /* move the new value to its correct position in the maxHeap array */
    this.bubbleUp();
  }

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
      if (newValue <= parentValue) {
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
}
