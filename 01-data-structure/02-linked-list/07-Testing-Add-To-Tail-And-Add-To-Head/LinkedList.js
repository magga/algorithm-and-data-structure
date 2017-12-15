const Nodes = require('./Nodes');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.addToHead = (value) => {
            const newNode = new Nodes(value, this.head, null);
        
            if (this.head) {
                this.head.prev = newNode;
            } else {
                this.tail = newNode;
            }
        
            this.head = newNode;
        };

        // 02-06
        this.addToTail = (value) => {
            const newNode = new Nodes(value, null, this.tail);

            if (this.tail) {
                this.tail.next = newNode;
            } else {
                this.head = newNode;
            }

            this.tail = newNode;
        }
    }
}

module.exports = LinkedList;
