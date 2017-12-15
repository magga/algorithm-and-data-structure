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

        this.addToTail = (value) => {
            const newNode = new Nodes(value, null, this.tail);

            if (this.tail) {
                this.tail.next = newNode;
            } else {
                this.head = newNode;
            }

            this.tail = newNode;
        }

        this.removeHead = () => {
            if (!this.head) {
                return null;
            }

            const val = this.head.value;

            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }

            return val;
        }

        this.removeTail = () => {
            if (!this.tail) {
                return null;
            }

            const val = this.tail.value;

            this.tail = this.tail.prev;

            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }

            return val;
        }

        // 02-10
        this.search = (searchValue) => {
            let currentNode = this.head;

            while (currentNode) {
                if (currentNode.value === searchValue) {
                    return currentNode.value;
                }

                currentNode = currentNode.next;
            }

            return null;
        }
    }
}

module.exports = LinkedList;
