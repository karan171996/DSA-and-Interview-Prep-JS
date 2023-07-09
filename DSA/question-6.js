// Max Depth in Tree


class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    maxDepth(node){
        if(node === null) {
            return 0;
        }
        return 1 + Math.max(this.maxDepth(node?.left ?? null), this.maxDepth(node?.right));
    }
}

const tree = new Node(3);
tree.left = new Node(9);
tree.right = new Node(20);
tree.right.left = new Node(15);
tree.right.right = new Node(7);
console.log('node', tree.maxDepth(tree));