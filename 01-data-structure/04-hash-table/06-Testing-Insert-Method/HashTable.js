// 04-05
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

        // 04-05
        this.insert = (key, value) => {
            const index = this.hash(key);

            if (!this.buckets[index]) {
                this.buckets[index] = new HashNode(key, value);
            } else {
                let currentNode = this.buckets[index];

                while (currentNode.next) {
                    currentNode = currentNode.next;
                }

                currentNode.next = new HashNode(key, value);
            }
        }
    }
}

module.exports = HashTable;
