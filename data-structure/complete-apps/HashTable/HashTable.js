const HashNode = require('./HashNode');

class HashTable {
    constructor(size) {
        this.buckets = Array(size);
        this.numBuckets = this.buckets.length;

        this.hash = (key) => {
            let total = 0;

            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i);
            }

            const bucket = total % this.numBuckets;
            return bucket;
        }

        this.insert = (key, value) => {
            const index = this.hash(key);

            if (!this.buckets[index]) {
                this.buckets[index] = new HashNode(key, value);
            } else if (this.buckets[index].key === key) {
                this.buckets[index].value = value;
            } else { 
                let currentNode = this.buckets[index];

                while (currentNode.next) {
                    if (currentNode.next.key === key) {
                        currentNode.next.value = value;
                        return;
                    }

                    currentNode = currentNode.next;
                }

                currentNode.next = new HashNode(key, value);
            }
        }

        this.get = (key) => {
            let index = this.hash(key);

            if (!this.buckets[index]) {
                return null;
            } else {
                let currentNode = this.buckets[index];

                while (currentNode) {
                    if (currentNode.key === key) {
                        return currentNode.value;
                    }

                    currentNode = currentNode.next;
                }

                return null;
            }
        }

        // 04-12
        this.retrieveAll = () => {
            let allNodes = [];

            for (let i = 0; i < this.numBuckets; i++) {
                let currentNode = this.buckets[i];

                while (currentNode) {
                    allNodes.push(currentNode);
                    currentNode = currentNode.next;
                }
            }

            return allNodes;
        }
    }
}

module.exports = HashTable;
