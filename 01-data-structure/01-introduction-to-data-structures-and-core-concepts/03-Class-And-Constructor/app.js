// Add User reference from another file
const User = require('./User');

// Create a new object based on the User class
// Call it with defining a constructor
const user1 = new User('Magga', 'Panna');

// Create another User object with different data
const user300 = new User('John', 'Doe');

// Call the object's method
user1.printName();
user300.printName();

// Set the class' static variable so all of the class' object
//   has the same property and value
User.prototype.mailDomain = '@purwadhika.com';

// Print every user's email
console.log(`${user1.firstName}${user1.mailDomain}`);
console.log(`${user300.firstName}${user300.mailDomain}`);