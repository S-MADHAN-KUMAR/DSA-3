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

function findHeight(root){
    if(!root) return 0;
    let leftHeight = this.findHeight(root.left);
    let rightHeight = this.findHeight(root.right);
    return Math.max(leftHeight,rightHeight) + 1;
}

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


findLeafNode(root,result=[]){
    if(!root){
        return null
    }

    if(!root.left && !root.right){
        result.push(root.value)
    }

    this.findLeafNode(root.left,result)
    this.findLeafNode(root.right,result)
    return result
}
//parent oda parent of the target
findAncestor(root,target,ancestor=[]){
    if(!root){
        return []
    }
    if(root.value==target){
        return ancestor
    }
    ancestor.push(root.value)
    if(target < root.value){
        return this.findAncestor(root.left,target,ancestor)
    }else{
        return this.findAncestor(root.right,target,ancestor)
    }
}
//descendant means child of the target
findNode(root,target){
    if(!root){
        return null
    }

    if(root.value==target){
        return root
    }

    if(target < root.value){
        return this.findNode(root.left,target)
    }else{
        return this.findNode(root.right,target)
    }
}

findDescendants(node,descendants=[]){
    if(!node){
        return descendants
    }            
    this.findDescendants(node.left,descendants)
    this.findDescendants(node.right,descendants)
    descendants.push(node.value)
    return descendants
}

getDescendants(target){
    let targetNode=this.findNode(this.root,target)

    if(!targetNode){
        return []
    }

    return this.findDescendants(targetNode)
}
//each node how many child which is degree
degree(root,target){
    if(!root){
        return null
    }

    if(root.value == target){
        let count=0
        if(root.left) count++
        if(root.right) count++
        return count
    }
    if(target < root.value){
        return this.degree(root.left,target)
    }else{
        return this.degree(root.right,target)
    }
}
//depth means no of edges

findDepth(root,target){
    if(!root){
        return null
    }

    let depth=0

    while(root){
        if(target < root.value){
            root=root.left
            depth++
        }
        else if(target > root.value){
            root=root.right
            depth++
        }
        else{
        return depth
        }
    }
    return -1
}

findLCA(root, n1, n2) {
    while (root) {
        if (root.value < n1 && root.value < n2) {
            root = root.right; // Move to the right
        } else if (root.value > n1 && root.value > n2) {
            root = root.left; // Move to the left
        } else {
            return root; // Found the LCA
        }
    }
    return null; // No common ancestor found
}

// Find the distance from root to a specific node
findDistance(root, target) {
    let distance = 0;
    while (root) {
        if (target < root.value) {
            root = root.left;
            distance++;
        } else if (target > root.value) {
            root = root.right;
            distance++;
        } else {
            return distance; // Found the target
        }
    }
    return -1; // Target not found
}

// Find the path from root to a specific node
findPath(root, target) {
    let path = [];
    while (root) {
        path.push(root.value);
        if (target < root.value) {
            root = root.left;
        } else if (target > root.value) {
            root = root.right;
        } else {
            break;
        }
    }
    return path;
}

// Find the path between two nodes (n1 and n2)
findPathBetweenNodes(n1, n2) {
    const LCA = this.findLCA(this.root, n1, n2);
    if (!LCA) return [];

    const path1 = this.findPath(LCA, n1); // Path from LCA to n1
    const path2 = this.findPath(LCA, n2); // Path from LCA to n2
    return [...path1.reverse(), ...path2.slice(1)]; // Combine paths
}

// Find the distance between two nodes (n1 and n2)
findDistanceBetweenNodes(n1, n2) {
    const LCA = this.findLCA(this.root, n1, n2);
    if (!LCA) return -1;

    const distance1 = this.findDistance(LCA, n1); // Distance from LCA to n1
    const distance2 = this.findDistance(LCA, n2); // Distance from LCA to n2

    return distance1 + distance2; // Total distance between n1 and n2
}