const LinkedList = require('./LinkedList');
const Nodes = require('./Nodes');

// 02-09
// ----------
let ll = new LinkedList();
ll.addToTail('One');
ll.addToTail('Two');
ll.addToTail('Three');

console.log(ll.removeTail());
console.log(ll);
// ----------
