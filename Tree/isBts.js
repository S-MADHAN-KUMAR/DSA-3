class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root, min = null, max = null) {
    if (!root) return true;

    if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
        return false;
    }

    return isBST(root.left, min, root.value) && isBST(root.right, root.value, max);
}


// Creating a valid BST
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);

console.log(isBST(root)); // Output: true

// Creating an invalid BST
let invalidRoot = new Node(10);
invalidRoot.left = new Node(5);
invalidRoot.right = new Node(8); // Wrong placement (should be >10)

console.log(isBST(invalidRoot)); // Output: false
