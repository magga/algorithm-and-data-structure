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

            if (order === 'post-order') {
                iteratorFunc(this.value);
            }
        }

        // 03-17
        this.breadthFirstTraversal = (iteratorFunc) => {
            let queue = [];

            while (queue.length) {
                const treeNode = queue.shift();
                iteratorFunc(treeNode);

                if (treeNode.left) {
                    queue.push(treeNode.left);
                }

                if (treeNode.right) {
                    queue.push(treeNode.right);
                }
            }
        }
    }
}

module.exports = BST;
