class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
const juntionPoint = head.next.next.next;
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = juntionPoint;


function circlularListCheck (node) {
	let slow = node;
	let fast = node;
	while(slow!==null && fast!==null && fast.next!==null){
		
		slow = slow.next;
		fast = fast.next.next;
		if(slow.val === fast.val){
			break;
		}
	}
	console.log('fast', fast);
	slow = node;
	while(slow.val !== fast.val){
        slow = slow.next;
        fast = fast.next;
    }
    return slow.val;
}

console.log(circlularListCheck(head));