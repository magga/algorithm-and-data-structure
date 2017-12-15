const LinkedList = require('./LinkedList');
const Nodes = require('./Nodes');

// 02-13
// ----------
let ll = new LinkedList();
ll.addToTail(1);
ll.addToTail(4);
ll.addToTail(5);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(1);
ll.addToTail(1);
ll.addToTail(6);
ll.addToTail(9);
ll.addToTail(5);

console.log(ll.indexOf(1));
console.log(ll.indexOf(5));
console.log(ll.indexOf(7));
// ----------
