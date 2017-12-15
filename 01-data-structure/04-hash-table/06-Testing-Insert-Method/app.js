const HashTable = require('./HashTable');

let myHT = new HashTable(30);

// 04-06
// ----------
myHT.insert('Magga', 'magga@purwadhika.com');
myHT.insert('Gogo', 'gogo@purwadhika.com');
myHT.insert('Yudha', 'yudha@purwadhika.com');

console.log(myHT.buckets);
// ----------
