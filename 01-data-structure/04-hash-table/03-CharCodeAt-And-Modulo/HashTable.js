// 04-02
class HashTable {
    constructor(size) {
        this.buckets = Array(size);
        this.numBuckets = this.buckets.length;
    }
}

module.exports = HashTable;
