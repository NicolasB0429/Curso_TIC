export class Graph {
  
  constructor() {
    this.nodes = new Map();
    this.isDirected = false;
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, new Set());
    }
  }

  addEdge(node1, node2) {

    if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
      console.log("Nodos NO existen en el grafo.");
    }
    
    this.nodes.get(node1).add(node2);
    
    if (!this.isDirected) {
      this.nodes.get(node2).add(node1);
    }
  }


  removeNode(node) {
    if (this.nodes.has(node)) {

      this.nodes.delete(node);

      for (const [node, adjacentNodes] of this.nodes) {
        adjacentNodes.delete(node);
      }
    }
  }


  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {

      this.nodes.get(node1).delete(node2);

      if (!this.isDirected) {
        this.nodes.get(node2).delete(node1);
      }
    }
  }


  hasEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      return this.nodes.get(node1).has(node2);
    }
    return false;
  }


  getNeighbors(node) {
    if (this.nodes.has(node)) {
      return Array.from(this.nodes.get(node));
    }
    return [];
  }


  getAllNodes() {
    return Array.from(this.nodes.keys());
  }


  setDirected() {
    this.isDirected = true;
  }


  setUndirected() {
    this.isDirected = false;
  }

  isGraphDirected() {
    return this.isDirected;
  }
}
