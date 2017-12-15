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

        this.breadthFirstTraversal = (iteratorFunc) => {
            let queue = [this];

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

        // 03-20
        // The smallest value in the tree will be the furthest left
        //   node in it
        this.getMinVal = () => {
            if (this.left) {
                return this.left.getMinVal();
            } else {
                return this.value;
            }
        }

        // 03-20
        // The maximum value in the tree will be the furthest right
        //   node in it
        this.getMaxVal = () => {
            if (this.right) {
                return this.right.getMaxVal();
            } else {
                return this.value;
            }
        }
    }
}

module.exports = BST;
