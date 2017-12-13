class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

        this.insert = (val) => {
            if (val <= this.value) {
                if (!this.left) {
                    this.left = new BST(val);
                } else {
                    this.left.insert(val);
                }
            } else if (val > this.value) {
                if (!this.right) {
                    this.right = new BST(val);
                } else {
                    this.right.insert(val);
                }
            }
        }

        // 03-07
        this.contains = (val) => {
            if (val === this.value) {
                return true;
            } else if (val < this.value) {
                if (!this.left) {
                    return false;
                } else {
                    return this.left.contains(val);
                }
            } else if (val > this.value) {
                if (!this.right) {
                    return false;
                } else {
                    return this.right.contains(val);
                }
            }
        }
    }
}

module.exports = BST;
