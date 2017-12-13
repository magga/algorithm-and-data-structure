const Nodes = require('./Nodes');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.addToHead = (value) => {
            // 02-03
            const newNode = new Nodes(value, this.head, null);
        };
    }
}

module.exports = LinkedList;
