class LinkedList {
    constructor(val){
        this.val = val;
        this.next = null;
    }

    reverse(node){
        let slow = node;
        let prev = node;
        slow = slow.next;
        prev.next = null;
        while(slow){
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }
        return prev;
    }
}

const list = new LinkedList(1);
list.next = new LinkedList(2);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(4);
list.next.next.next.next = new LinkedList(5);
list.next.next.next.next.next = new LinkedList(6);

console.log('list.reverse()', list.reverse(list));