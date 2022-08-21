class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    findSum() {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner=this.head
            let sum=0
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
            while(runner !== null){
                //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
                sum+=runner.data
                //Tell our attendant to move to the next car
                runner=runner.next
            }
            return sum
        }
    // Display the values of all the nodes in the list
    display() {
        var ListString = ""; // String that will contain values in the list (empty at first)
        // Edge case: list is empty
        if (this.head == null) {
            return "Empty String";
        }
        // If at least one node:
        ListString += this.head.value // Concatenating the first value in the list
        // Adding: ", " + value; to following values after first
        var runner = this.head.next;
        while (runner.value != null) {
            ListString += ", " + runner.value; // add node's value to the list
            runner = runner.next; // moving the runner to the next node
        }
        return ListString;
    }
}

var mySLL = new LinkedList();
mySLL.findSum(5);
console.log(mySLL.display());