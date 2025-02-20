class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]])
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  bfs(startVertex) {
    if (!this.adjacencyList[startVertex]) {
      console.log(`Vertex ${startVertex} does not exist in the graph.`);
      return;
    }

    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
  }

  dfs(startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    visited.add(startVertex);

    while (stack.length > 0) {
      const vertex = stack.pop();
      console.log(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
  }

  bfsCycleDetection(startVertex) {
    const visited = new Set();
    const queue = [{ vertex: startVertex, parent: null }];
    visited.add(startVertex);

    let cycleDetected = false;

    while (queue.length > 0) {
      const { vertex, parent } = queue.shift();
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({ vertex: neighbor, parent: vertex });
        } else if (neighbor !== parent) {
          console.log("Cycle detected!");
          cycleDetected = true;
          return;
        }
      });
      if (cycleDetected) {
        break;
      }
    }
    if (!cycleDetected) console.log("No cycle detected");
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
// graph.display()
graph.bfs("C");
// graph.display()
