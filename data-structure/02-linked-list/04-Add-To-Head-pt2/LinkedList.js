const Nodes = require('./Nodes');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.addToHead = (value) => {
            const newNode = new Nodes(value, this.head, null);
        
            // 02-04
            // ----------
            if (this.head) {
                this.head.prev = newNode;
            } else {
                this.tail = newNode;
            }
        
            this.head = newNode;
            // ----------
        };
    }
}

module.exports = LinkedList;
