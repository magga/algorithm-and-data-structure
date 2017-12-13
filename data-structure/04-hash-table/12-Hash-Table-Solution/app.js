const HashTable = require('./HashTable');

let myHT = new HashTable(30);

myHT.insert('Magga', 'magga@purwadhika.com');
myHT.insert('Gogo', 'gogo@purwadhika.com');
myHT.insert('Yudha', 'yudha@purwadhika.com');

// 04-12
// ----------
const allNodes = myHT.retrieveAll();

console.log(allNodes);
// ----------
