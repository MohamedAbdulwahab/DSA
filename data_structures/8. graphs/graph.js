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

  /* removeEdge: removes (disconnect) an edge between two vertices in the graph */
  removeEdge(vertexOne, vertexTwo) {
    /* filter out V2 from V1's adjacency list */
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (e) => {
        e !== vertexTwo;
      }
    );

    /* filter out V1 from V2's adjacency list */
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (e) => {
        e !== vertexOne;
      }
    );
  }

  /* ----- There is a bug here. It's 3:01 AM, I'm tired. Try to fix tomorrow  ----- */
  /* removeVertex: removes a vertex from the graph and deletes all its edges */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
