/* Stack class */
class Stack {
  constructor() {
    this.stack = [];
  }

  /* push: adds an item to the top of the stack */
  push(val) {
    return this.stack.push(val);
  }

  /* pop: removes the item at the top of the stack */
  pop() {
    return this.stack.pop();
  }

  /* peek: returns the item at the top of the stack */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /* isEmpty: returns true if the stack is empty */
  isEmpty() {
    return this.stack.length === 0;
  }
}
