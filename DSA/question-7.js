// sorted linked list to height Balanced Tree

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    constructor(val){
        this.val = val;
        this.next = null;
    }
    getTree(node){
        if(node === null) {
            return null;
        }
        console.log('node before', node);
        const mid = this.mid(node);
        console.log('mid', mid);
        console.log('node after', node);
        const newNode = new Node(mid?.val);
        console.log('newNode', newNode);

        if(node === mid){
            return node;
        }
        newNode.left = this.getTree(node);
        newNode.right = this.getTree(mid.next);

        return newNode;
    }

    mid(node){
        let fast = node;
        let slow = node;
        let previous = node;

        while(fast!== null && fast?.next!==null){
            previous = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if(previous!==null){
            previous.next = null;
        }
        console.log('previous', previous);
        console.log('slow', slow);
        console.log('node giving', node);
        return slow;
    }

}


const list = new LinkedList(-10);
list.next = new LinkedList(-3);
list.next.next = new LinkedList(0);
list.next.next.next = new LinkedList(5);
list.next.next.next.next = new LinkedList(9);
console.log('list.LinkedList', list.getTree(list));
// const tree = new Node()