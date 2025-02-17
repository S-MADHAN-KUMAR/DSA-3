class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  search(root,value){
    if(!root){
        return false
    }else{
        if(root.value === value){
            return true
        }else if(value < root.value ){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(100)
bst.insert(1000)
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,100))
console.log(bst.search(bst.root,1000))
console.log(bst.search(bst.root,10001))