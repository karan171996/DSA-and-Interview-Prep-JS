// Right Side View

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    traceNode(node){
        const arr = [];
        let level = 0;
        function traverse(node, level) {
            if(node === null){
                return;
            }
            traverse(node?.left, level+1);
            traverse(node?.right, level+1);
            arr[level] = node?.val;
        }

        traverse(node, level)

        return arr;
    }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.left.left = new Node(5);
tree.left.left.right = new Node(6);

console.log(tree.traceNode(tree));