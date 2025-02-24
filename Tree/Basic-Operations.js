class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
       this.root = null
    }
    isEmpty(){
        return this.root === null
    }
   insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
        this.root = node;
    } else {
        this.insertNode(this.root, node);
    }
}

    insertNode(root, node) {
    if (node.value < root.value) {
        if (!root.left) {
            root.left = node;
            return; 
        }
        this.insertNode(root.left, node);
    } else {
        if (!root.right) {
            root.right = node;
            return;
        }
        this.insertNode(root.right, node);
    }
}
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    findParent(root,target){
        if(!root||root.value === target){
            return null
        }
        let parent  = null
        function Finder(node){
            if(!node){
                return 
            }
            if((node.left && node.left.value === target)
            ||
            (node.right && node.right.value === target)
            ){
                parent = node
                return
            }
            Finder(node.left)
            Finder(node.right)
        }
        Finder(root)
        return parent
    }
    findChild(root, target) {
    if (!root) return null;
    
    if (root.value === target) {
        return {
            leftChild: root.left?.value ?? null,
            rightChild: root.right?.value ?? null
        };
    }

    return target < root.value 
        ? this.findChild(root.left, target) 
        : this.findChild(root.right, target);
}
findSibling(root, target) {
    if (!root) return null;
    
    let parent = this.findParent(root, target)
    
    if (!parent) return null;

    if (parent.left && parent.left.value === target) {
        return parent.right ? parent.right.value : null; 
    }
    if (parent.right && parent.right.value === target) {
        return parent.left ? parent.left.value : null; 
    }

    return null;
}


}

const bst = new Tree()
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.findSibling(bst.root, 20)); // Output: 40
console.log(bst.findSibling(bst.root, 40)); // Output: 20
console.log(bst.findSibling(bst.root, 70)); // Output: null (no sibling)
console.log(bst.findSibling(bst.root, 30)); // Output: 70
console.log(bst.findSibling(bst.root, 100)); // Output: null (node not in tree)