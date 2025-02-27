class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
  }
}
 
class BTS {  
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
          return this.insertNode(this.root, node);
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

  search(root, value) {
      if (!root) {
          return false;
      } else {
          if (root.value === value) {
              return true;
          } else if (value < root.value) {
              return this.search(root.left, value);
          } else {
              return this.search(root.right, value);
          }
      }
  }

  preOrder(root) {
      if (root) {
          console.log(root.value);
          this.preOrder(root.left);
          this.preOrder(root.right);
      }
  }

  min(root) {
      if (!root) return null;
      while (root.left) {
          root = root.left;
      }
      return root.value;
  }

  max(root) {
      if (!root) return null;
      while (root.right) {
          root = root.right;
      }
      return root.value;
  }

  delete(value) {
      this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
      if (!root) return null;
      if (value < root.value) {
          root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
          root.right = this.deleteNode(root.right, value);
      } else {
          if (!root.left && !root.right) {
              return null;
          } else if (!root.left) {
              return root.right;
          } else if (!root.right) {
              return root.left;
          }
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
      }
      return root;
  }

  findParent(root,value){
    if(!root|| root.value === value) {

        return
    }
    let parent = null
    function Finder(root){
        if(!root || parent !== null){
            return 
        }
        if(root.left && root.left.value === value){
            parent = root
            return
        }
        if( root.right && root.right.value === value){
            parent = root
            return
        }
        Finder(root.left)
        Finder(root.right)
    }
    Finder(root)
    return parent.value
}


removeDuplicates(root){
    const unique = new Set()

    const inOrder=(node)=>{
        if(!node) return
        inOrder(node.left)
        unique.add(node.value)
        inOrder(node.right)
    }
    inOrder(root)
    this.root = null
    unique.forEach(value=>this.insert(value))
}

findKthLargerstElement(root,k){
    if(!root) return null
    let result = null
    let count =0
    function ReverdeOrder(root){
        if(!root||result !== null){
            return
        }
        ReverdeOrder(root.right)
        count++
        if(count === k){
            result = root.value
            return
        }
        ReverdeOrder(root.left)
    }
    ReverdeOrder(root)
    return result
}
findKthSmallestElement(root,k){
    if(!root) return null
    let result = null
    let count =0
    function ReverdeOrder(root){
        if(!root||result !== null){
            return
        }
        ReverdeOrder(root.left)
        count++
        if(count === k){
            result = root.value
            return
        }
        ReverdeOrder(root.right)
    }
    ReverdeOrder(root)
    return result
}
findParent(root, target) {
    if (!root || root.value === target) return null;
    let parent = null;
    
    function parentHelper(node) {
        if (node === null || parent !== null) return;

        if (node.left && node.left.value === target) {
            parent = node;
            return;
        }
        if (node.right && node.right.value === target) {
            parent = node;
            return;
        }

        parentHelper(node.left);
        parentHelper(node.right);
    }

    parentHelper(root);
    return parent.value
}
}

// Example Usage
const bts = new BTS();
bts.insert(10);
bts.insert(100);
bts.insert(1000);
bts.insert(11);
bts.insert(111);
bts.insert(100);
bts.insert(1000);
bts.insert(11);
bts.insert(111);


bts.removeDuplicates(bts.root)
bts.preOrder(bts.root); 
console.log('---------------------------------');

console.log(bts.findKthSmallestElement(bts.root,4));
console.log(bts.findParent(bts.root,1000));


