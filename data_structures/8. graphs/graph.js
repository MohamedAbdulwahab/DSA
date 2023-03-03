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

  /* addEdge: adds an edge (connection) between two vertices [assuming a non-directed graph] */
  addEdge(vertexOne, vertexTwo) {
    /* add an edge from V1 to V2 */
    this.adjacencyList[vertexOne].push(vertexTwo);

    /* add an edge from V2 to V1 */
    this.adjacencyList[vertexTwo].push(vertexOne);
  }
}
