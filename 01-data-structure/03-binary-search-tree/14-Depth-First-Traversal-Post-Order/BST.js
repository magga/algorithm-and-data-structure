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

        this.depthFirstTraversal = (iteratorFunc, order) => {
            if (order === 'pre-order') {
                iteratorFunc(this.value);
            }

            if (this.left) {
                this.left.depthFirstTraversal(iteratorFunc, order);
            }

            if (order === 'in-order') {
                iteratorFunc(this.value);
            }

            if (this.right) {
                this.right.depthFirstTraversal(iteratorFunc, order);
            }

            // 03-14
            // For post-order Depth First Traversal, we're going to process all
            //   the left children first, then all the right children, then
            //   the parent node
            // This can be useful to safely delete nodes from a BST because it
            //   starts at the lowest level and works it's way up
            if (order === 'post-order') {
                iteratorFunc(this.value);
            }
        }
    }
}

module.exports = BST;
