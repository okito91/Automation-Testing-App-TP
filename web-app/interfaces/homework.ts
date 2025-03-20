// 1. Create a TypeScript interface named Person
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

// 2. Create a TypeScript interface named PersonInfo that extends Person
interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

// 3. Create an object of type Person
const person1: Person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phoneNumber: 1234567890
};

// 4. Create an object of type PersonInfo
const person2: PersonInfo = {
    name: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
    phoneNumber: 9876543210,
    country: "USA",
    greeting: () => `Welcome, ${person2.name} ${person2.lastName}!`
};

// Example usage
console.log(person2.greeting ? person2.greeting() : "No greeting available");
