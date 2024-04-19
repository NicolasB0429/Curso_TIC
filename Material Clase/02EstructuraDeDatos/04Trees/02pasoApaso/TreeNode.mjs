export class TreeNode {
  valor;
  left;
  right;

  constructor(valor, left = null, right = null) {
    this.valor = valor;
    this.left = left;
    this.right = right;
  }

  toString = () => {
    return `Node: valor: ${this.valor} : left: ${
      this.left == null ? null : "object"
    } : right: ${this.right == null ? null : "object"}`;
  };
}
