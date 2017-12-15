const LinkedList = require('./LinkedList');
const Nodes = require('./Nodes');

// 02-11
// ----------
let ll = new LinkedList();
ll.addToTail(10);
ll.addToTail(40);
ll.addToTail(38);
ll.addToTail('Book');
ll.addToTail(103);
ll.addToTail('Samurai');
ll.addToTail(70);

console.log(ll.search(103));
console.log(ll.search('Borscht'));
// ----------
