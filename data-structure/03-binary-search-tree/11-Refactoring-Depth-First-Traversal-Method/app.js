const BST = require('./BST');

let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

const log = (val) => {
    console.log(val);
}

// 03-11
bst.depthFirstTraversal(log, 'in-order');
