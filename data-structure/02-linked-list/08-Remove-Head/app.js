const LinkedList = require('./LinkedList');
const Nodes = require('./Nodes');

// 02-08
// ----------
let ll = new LinkedList();
ll.addToHead(10);
ll.addToHead(20);
ll.addToHead(30);

console.log(ll.removeHead());
console.log(ll);
// ----------
