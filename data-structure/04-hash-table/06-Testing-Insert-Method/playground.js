// 04-03
// CharCodeAt
// Turn a char into ASCII number
// ----------
const val = 'Hello World'.charCodeAt(1);

console.log(val);
// ----------

// 04-03
// Modulo
// ----------
console.log(10 % 3);
// ----------

// 04-03
// Combile CharCodeAt with Modulo
// ----------
const key = 'Hello World'.charCodeAt(1);
const hashTableLength = 30;

console.log(`Key : ${key}, Hash Table Length : ${hashTableLength}`);
console.log(`Modulo : ${key % hashTableLength}`);
// ----------