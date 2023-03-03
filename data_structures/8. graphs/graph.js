class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /* addVertex: adds a vertex (node) to the graph */
  addVertex(name) {
    /* duplicates are not allowed (store only the older name) */
    /* name is non-duplicate */
    if (!this.adjacencyList[name]) {
      /* store the name as key and assign an empty array as the value */
      this.adjacencyList[name] = [];
    }
  }
}
