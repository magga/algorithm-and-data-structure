// Define the User's class definition
class User {
    // Create a constructor
    // Everytime a new object created based on the User's class,
    //   that object have to provide this constructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printName = () => {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
}

// Export the User class so it can be required from another files
module.exports = User;
