import { TreeNode } from "./TreeNode.mjs";

export class TreeBinary {
  root;

  constructor() {
    this.root = null;
  }

  addNode = (valor, node) => {
    // console.log("addNode", valor);
    if (valor < node.valor) {
      if (node.left == null) {
        node.left = new TreeNode(valor);
        // console.log("addNode.if", valor);
      } else {
        // console.log("addNode.else.left", valor);
        this.addNode(valor, node.left);
      }
    } else {
      if (node.right == null) {
        // console.log("addNode.if.right", valor);
        node.right = new TreeNode(valor);
      } else {
        // console.log("addNode.else.right", valor);
        this.addNode(valor, node.right);
      }
    }
  };

  add = (valor) => {
    //console.log("add", valor);
    if (this.root == null) {
      //console.log("add.if", valor);
      this.root = new TreeNode(valor);
    } else {
      //console.log("add.else", valor);
      this.addNode(valor, this.root);
    }
  };

  addArray = (array) => {
    for (let item of array) {
      this.add(item);
    }
  };

  preOrder = (puntero = this.root) => {
    if (puntero != null) {
      return (
        " : " +
        puntero.valor +
        (puntero.left != null ? this.preOrder(puntero.left) : " ") +
        (puntero.right != null ? this.preOrder(puntero.right) : " ")
      );
    }
  };

  inOrder = (puntero = this.root) => {
    if (puntero != null) {
      return (
        (puntero.left != null ? this.inOrder(puntero.left) : " ") +
        " : " +
        puntero.valor +
        (puntero.right != null ? this.inOrder(puntero.right) : " ")
      );
    }
  };

  postOrder = (puntero = this.root) => {
    if (puntero != null) {
      return (
        (puntero.left != null ? this.postOrder(puntero.left) : "") +
        (puntero.right != null ? this.postOrder(puntero.right) : "") +
        " : " +
        puntero.valor
      );
    }
  };

  findNode(valor,puntero = this.root) {
    if (puntero == null) {
      return null;
    }
    if (puntero.valor == valor) {
      return puntero;
    } else if (valor < puntero.valor) {
      return this.findNode(valor, puntero.left);
    } else {
      return this.findNode(valor, puntero.right);
    }
    return -1;
  }
}
