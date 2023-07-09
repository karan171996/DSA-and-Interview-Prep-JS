// Symmetry of the Tree


class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    symmetryCheck(node) {
        if(node === null) {
            return true;
        }else{
            return this.coreSymetryCheck(node?.left, node?.right);
        }
    }

    coreSymetryCheck(leftNode, rightNode){
        if(leftNode === null && rightNode === null){
            return true;
        }
        if(!!leftNode && !!rightNode && leftNode?.val === rightNode?.val){
            return this.coreSymetryCheck(leftNode?.left, rightNode?.right) && this.coreSymetryCheck(leftNode?.right, rightNode?.left);
        }
        return false;
    }
}






const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(2);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right.left = new Node(4);
tree.right.right = new Node(3);

console.log(tree.symmetryCheck(tree));