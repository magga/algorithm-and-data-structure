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

// 03-20
console.log(`Min : ${bst.getMinVal()}`);
console.log(`Max : ${bst.getMaxVal()}`);
