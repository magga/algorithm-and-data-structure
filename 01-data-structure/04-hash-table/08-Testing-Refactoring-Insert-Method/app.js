const HashTable = require('./HashTable');

let myHT = new HashTable(30);

myHT.insert('Magga', 'magga@purwadhika.com');
myHT.insert('Gogo', 'gogo@purwadhika.com');
myHT.insert('Yudha', 'yudha@purwadhika.com');

// 04-08
// ----------
myHT.insert('Magga', 'magga@gmail.com');
myHT.insert('Gogo', 'gogo@gmail.com');
myHT.insert('Yudha', 'yudha@gmail.com');
// ----------

console.log(myHT.buckets);
