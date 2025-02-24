function findPrimes(root,results = []){
    if(root){
        this.findPrimes(root.left,results);
        if(this.isPrime(root.value)) results.push(root.value);
        this.findPrimes(root.right,results);
    }
    return results
}

function isBST(root,min=null,max=null){
    if(!root) return true;
    if((min!==null && root.value <= min) || (max!==null && root.value >= max)){
        return false;
    }
    return this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max);
}

// findHeight(root){
//     if(!root) return 0;
//     let leftHeight = this.findHeight(root.left);
//     let rightHeight = this.findHeight(root.right);
//     return Math.max(leftHeight,rightHeight) + 1;
// }

function findKthLargest(root,k){
    if(!root) return null;
    let count = 0;
    let result = null;
    function reverseInOrder(root){
        if(!root || result!==null) return;
        reverseInOrder(root.right);
        count++;
        if(count === k){
            result = root.value;
            return;
        }
        reverseInOrder(root.left);
    }
    reverseInOrder(root);
    return result;
}



function findClosest(root,target){
    return this.findClosestValue(this.root,target,Infinity);
}

function findClosestValue(node,target,closest){
    if(!node) return closest;
    let currentDiff = Math.abs(target - node.value);
    let closestDiff = Math.abs(target - closest);

    if(currentDiff < closestDiff){
        closest = node.value;
    }

    if(target<node.value){
        return this.findClosestValue(node.left,target,closest);
    }
    else if (target>node.value){
        return this.findClosestValue(node.right,target,closest);
    }
    else{
        return closest;
    }
}

function RemoveDuplicates(root) {
    const unique = new Set();

    const inOrder = (node) => {
        if (!node) return;

        // Traverse the left subtree
        inOrder(node.left);

        // Add value to the unique set
        unique.add(node.value);

        // Traverse the right subtree
        inOrder(node.right);
    };

    // Collect unique values using in-order traversal
    inOrder(root);

    // Rebuild the tree with unique values
    this.root = null; // Clear the tree
    unique.forEach(value => this.insert(value));
}
