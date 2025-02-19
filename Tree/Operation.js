// findPrimes(root,results = []){
//     if(root){
//         this.findPrimes(root.left,results);
//         if(this.isPrime(root.value)) results.push(root.value);
//         this.findPrimes(root.right,results);
//     }
//     return results;
// }

// isBST(root,min=null,max=null){
//     if(!root) return true;
//     if((min!==null && root.value <= min) || (max!==null && root.value >= max)){
//         return false;
//     }
//     return this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max);
// }

// findHeight(root){
//     if(!root) return 0;
//     let leftHeight = this.findHeight(root.left);
//     let rightHeight = this.findHeight(root.right);
//     return Math.max(leftHeight,rightHeight) + 1;
// }

// findKthSmallest(root,k){
//     if(!root) return null;
//     let count = 0;
//     let result = null;
//     function inOrder(root){
//         if(!root || result!==null) return;
//         inOrder(root.left);
//         count++;
//         if(count === k){
//             result = root.value;
//             return;
//         }
//         inOrder(root.right);
//     }
//     inOrder(this.root);
//     return result;
// }

findKthLargest(root,k){
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



// findClosest(root,target){
//     return this.findClosestValue(this.root,target,Infinity);
// }

// findClosestValue(node,target,closest){
//     if(!node) return closest;
//     let currentDiff = Math.abs(target - node.value);
//     let closestDiff = Math.abs(target - closest);

//     if(currentDiff < closestDiff){
//         closest = node.value;
//     }

//     if(target<node.value){
//         return this.findClosestValue(node.left,target,closest);
//     }
//     else if (target>node.value){
//         return this.findClosestValue(node.right,target,closest);
//     }
//     else{
//         return closest;
//     }
// }

removeDuplicates(root) {
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




































isIdentical(tree1,tree2){
    if(!tree1 && !tree2) return true;
    if(!tree1 || !tree2) return false;
    return (tree1.value === tree2.value &&
        this.isIdentical(tree1.left,tree2.left) &&
        this.isIdentical(tree1.right, tree2.right)
    );
}

findSuccessor(root,target){
        
        function findMin(root){
            while(root && root.left){
                root = root.left;
            }
            return root;
        }

        let successor = null;
        function inOrder(node){
            if(!node || successor!==null) return;
            inOrder(node.left);
            if(target === node.value && node.right){
                successor = findMin(node.right);
            }
            if(successor === null && target < node.value){
                successor = node;
            }
            inOrder(node.right);
        }
        inOrder(root);
        return successor;
    }

findPredecessor(root,target){
    function findMax(node){
        while(node && node.right){
            node = node.right;
        }
        return node;
    }

    let predecessor = null;

    function reverseInOrder(node){
        if(!node || predecessor!==null) return;

        reverseInOrder(node.right);

        if(target === node.value && node.left){
            predecessor = findMax(node.left);
        }

        if(predecessor === null && target > node.value){
            predecessor = node;
        }

        reverseInOrder(node.left);
    }
    reverseInOrder(root);
    return predecessor;
}