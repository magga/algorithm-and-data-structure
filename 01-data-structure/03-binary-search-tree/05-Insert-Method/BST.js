// 03-05
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
    }
}

module.exports = BST;
