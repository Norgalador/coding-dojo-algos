class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }

    removeFront() {

        if(this.head == null) {
            return null
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this;
}

    front() {
        if(this.head == null) {
            return null
        }
        else {
            return this.head.data;
            
        }
    }
}
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node. 
// addFront Examples:
// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
let SLL1 = new LinkedList ();
SLL1.addFront(12);
console.log(SLL1);

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// removeFront Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }
SLL1.removeFront();
console.log(SLL1);

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// front Examples:
SLL1.addFront(4);
SLL1.front();
console.log(SLL1.front());

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null