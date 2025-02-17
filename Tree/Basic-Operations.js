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
    return parent;
}

findChild(root, target) {
    if (!root) return null;
    if (root.value === target) {
        const children = {
            leftChild: root.left ? root.left.value : null,
            rightChild: root.right ? root.right.value : null
        };
        return children;
    } else if (target < root.value) {
        return this.findChild(root.left, target);
    } else {
        return this.findChild(root.right, target);
    }
}

findSibling(root, target) {
    if (!root) return null;
    let parent = this.findParent(root, target);
    if (!parent) return null;
    if (parent.left && parent.left.value === target) {
        return parent.right;
    }
    if (parent.right && parent.right.value === target) {
        return parent.left;
    }
    return null;
}

findLeafNodes(root, result = []) {
    if (!root) return result;
    if (!root.left && !root.right) {
        result.push(root.value);
    }
    this.findLeafNodes(root.left, result);
    this.findLeafNodes(root.right, result);
    return result;
}

findPath(root, n1, n2) {
    function findLCA(root, n1, n2) {
        while (root) {
            if (root.value < n1 && root.value < n2) {
                root = root.right;
            } else if (root.value > n1 && root.value > n2) {
                root = root.left;
            } else {
                return root;
            }
        }
        return null;
    }

    function pathToLCA(root, target) {
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

    const LCA = findLCA(root, n1, n2);
    if (!LCA) return [];
    const path1 = pathToLCA(LCA, n1);
    const path2 = pathToLCA(LCA, n2);
    return [...path1, ...path2.slice(1).reverse()];
}

findDistance(root, n1, n2) {
    function findLCA(root, n1, n2) {
        while (root) {
            if (root.value > n1 && root.value > n2) {
                root = root.left;
            } else if (root.value < n1 && root.value < n2) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }

    function findDistance(root, target) {
        let distance = 0;
        while (root) {
            if (target < root.value) {
                root = root.left;
                distance++;
            } else if (target > root.value) {
                root = root.right;
                distance++;
            } else {
                break;
            }
        }
        return root ? distance : -1;
    }

    const LCA = findLCA(root, n1, n2);
    if (!LCA) return -1;
    const distance1 = findDistance(LCA, n1);
    const distance2 = findDistance(LCA, n2);
    if (distance1 === -1 || distance2 === -1) return -1;
    return distance1 + distance2;
}

findDepth(root, target) {
    let depth = 0;
    while (root) {
        if (target < root.value) {
            root = root.left;
            depth++;
        } else if (target > root.value) {
            root = root.right;
            depth++;
        } else {
            return depth;
        }
    }
    return -1;
}

degree(root, target) {
    if (!root) return null;
    if (root.value === target) {
        let count = 0;
        if (root.left) count++;
        if (root.right) count++;
        return count;
    }
    if (target < root.value) {
        return this.degree(root.left, target);
    } else {
        return this.degree(root.right, target);
    }
}

findAncestors(root, target, ancestors = []) {
    if (!root) return [];
    
    if (root.value === target) return ancestors;
    ancestors.push(root.value);
    if (target < root.value) {
        return this.findAncestors(root.left, target, ancestors);
    } else {
        return this.findAncestors(root.right, target, ancestors);
    }
}

findDescendants(node, descendants = []) {
    if (!node) return descendants;
    descendants.push(node.value);

    this.findDescendants(node.left, descendants);
    this.findDescendants(node.right, descendants);

    return descendants;
}
