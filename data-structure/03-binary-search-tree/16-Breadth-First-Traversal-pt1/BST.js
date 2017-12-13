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

        // 03-16
        // Breadth First Traversal will traverse through the whole tree and
        //   processing every node
        // But instead of going down every branch like we did with Depth First
        //   Traversal, we'll be moving down our tree level by level

        // In practice, this methot can be used for, such as, defining a hierarchy
        //   or a level of command
        // If we want to store all of the employee of a company in a search tree, 
        //   we would be able to tell who is in more executive roles versus who
        //   is in more subordinate roles by doing Breadth First Traversal
        // The top level would be the most executive employees, and the next level
        //   would be the people who work under them and so on all the way down
        // This could apply to how officers rank in the military as well
        this.breadthFirstTraversal = (iteratorFunc) => {
            let queue = [];
        }
    }
}

module.exports = BST;
