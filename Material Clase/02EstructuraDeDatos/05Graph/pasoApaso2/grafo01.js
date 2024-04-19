import { Graph } from "./Graph.mjs";

// Create a new graph
const characters = new Graph();

characters.setDirected();

// Add nodes
characters.addNode("AA");
characters.addNode("EE");
characters.addNode("KK");
characters.addNode("GG");
characters.addNode("NN");

// Add edges
characters.addEdge("AA", "EE");
characters.addEdge("EE", "AA");
characters.addEdge("AA", "KK");
characters.addEdge("KK", "AA");
characters.addEdge("AA", "GG");
characters.addEdge("GG", "AA");

characters.addEdge("NN", "AA");

characters.addEdge("EE", "GG");
characters.addEdge("GG", "EE");
characters.addEdge("EE", "KK");
characters.addEdge("KK", "EE");

characters.addEdge("GG", "KK");
characters.addEdge("KK", "GG");

characters.addEdge("KK", "NN");
characters.addEdge("NN", "KK");

console.log("Vecinos AA:", characters.getNeighbors("AA"));
console.log("Vecinos NN:", characters.getNeighbors("NN"));

console.log("De AA a NN:", characters.hasEdge("AA", "NN"));
console.log("De NN a AA:", characters.hasEdge("NN", "AA"));
console.log("De EE a GG:", characters.hasEdge("EE", "GG"));

console.log("Todos Los Nodos:", characters.getAllNodes());
characters.removeNode("NN");
console.log("Todos Los Nodos:", characters.getAllNodes());

console.log("De KK a NN:",characters.hasEdge("KK", "NN"));
