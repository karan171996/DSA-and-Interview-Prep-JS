// Binary Search Tree;

class TreeNode {
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value){
		const newNode = new TreeNode(value);
		if(this.root === null){
			this.root = newNode;
			return this;
		}

		let current = this.root;
		while(true){
			if(value === current.value) return undefined;
			if(value < current.value){
				if(current.left === null){
					current.left =newNode;
					return this;
				}
				current = current.left;
			}else{
				if(current.right === null){
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
}

const node = new BinarySearchTree();

node.insert(9);
node.insert(4);
node.insert(5);
node.insert(3);
node.insert(6);


console.log(node);