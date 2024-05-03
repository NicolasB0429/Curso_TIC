import { TreeNode } from "./TreeNode.mjs";

export class TreeBinary {
  root;

  constructor(valor) {
    this.root = null;
  }

  addNode = (valor, node) => {
    if (valor < node.valor) {
      if (node.left == null) {
        node.left = new TreeNode(valor);
      } else {
        this.addNode(valor, node.left);
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(valor);
      } else {
        this.addNode(valor, node.right);
      }
    }
  };

  add = (valor) => {
    if (this.root == null) {
      this.root = new TreeNode(valor);
    } else {
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

  findNode(value, puntero = this.root) {
    if (puntero == null) {
      return null;
    }
    if (puntero.valor == value) {
      return puntero;
    } else if (value < puntero.valor) {
      return this.findNode(value, puntero.left);
    } else {
      return this.findNode(value, puntero.right);
    }
    return -1;
  }

  findParent = (value, puntero = this.root) => {
    if (puntero.valor == value) {
      return puntero;
    }
    if (value < puntero.valor) {
      if (puntero.left == null) {
        return null;
      } else {
        if (puntero.left.valor == value) {
          return puntero;
        } else return this.findParent(value, puntero.left);
      }
    } else {
      if (puntero.right == null) {
        return null;
      } else {
        if (puntero.right.valor == value) {
          return puntero;
        } else return this.findParent(value, puntero.right);
      }
    }
    return null;
  };

  findBeforeMin = (puntero) => {
    if (puntero.left.left == null) {
      return puntero;
    } else {
      return this.findBeforeMin(puntero.left);
    }
  };

  delete = (value) => {
    let nodoABorrar = this.findNode(value);
    if (nodoABorrar == null) {
      // Nodo no existe
      return null;
    }
    // Se encuentra el padre
    let parent = this.findParent(value);
    console.log(`padre ${value}\n`, parent);

    // Caso 1: Se borra una hoja. left == right == null
    if (nodoABorrar.left == null &&
       nodoABorrar.right == null) {
      if (parent.valor > nodoABorrar.valor) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      return 11;
    }

    // Caso 2: El nodo tiene un solo hijo
    if (
      (nodoABorrar.left == null &&
         nodoABorrar.right != null) ||
      (nodoABorrar.left != null &&
         nodoABorrar.right == null)
    ) {
      if (parent.valor < nodoABorrar.valor) {
        if (nodoABorrar.right != null) {
          parent.right = nodoABorrar.right;
        } else {
          parent.right = nodoABorrar.left;
        }
        return 21;
      } else {
        if (nodoABorrar.right != null) {
          parent.left = nodoABorrar.right;
        } else {
          parent.left = nodoABorrar.left;
        }
        return 22;
      }
    }

    /* Caso 3: el nodo a borrar tiene los dos hijos. Entonces, el valor mínimo del hijo del nodo derecho, se coloca
      en el nodo a borrar
    */
    if (nodoABorrar.left != null &&
       nodoABorrar.right != null) {
      let minimoAntes = this.findBeforeMin(nodoABorrar.right);
      //console.log("minimo", minimo);
      nodoABorrar.valor = minimoAntes.left.valor
      minimoAntes.left = null
      return 31
    }
    return -1;
  };
}
