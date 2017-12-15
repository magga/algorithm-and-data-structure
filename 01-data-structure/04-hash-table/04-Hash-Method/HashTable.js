class HashTable {
    constructor(size) {
        this.buckets = Array(size);
        this.numBuckets = this.buckets.length;

        // 04-04
        this.hash = (key) => {
            let total = 0;

            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i);
            }

            const bucket = total % this.numBuckets;
            return bucket;
        }
    }
}

module.exports = HashTable;
