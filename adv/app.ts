

// Unions
let value: string | number;

value = "Hello World";
value = 23;
// value = true; // Not Allowed

function printId(id: number | string) {
    console.log("ID", id);
};

// printId(101);
// printId("HelloID");

// Intersection Types
// Intersection types combine multiple types into one.

type A = { name: string };
type B = { age: number };

type Person = A & B;

const user: Person = {
    name: "Ali",
    age: 23,
};
// console.log(user);

// Literal Types
let stat: "success" | "error" | "loading";
stat = "success";  // correct
// stat = "failed";   // error


function handleRequest(state: "pendding" | "success" | "error") {
    console.log("Request is ", state);
};

// console.log(handleRequest("pendding"));


// ENUMS
enum Direction {
    North,
    South,
    East,
    West
};

let dir: Direction = Direction.South;
console.log(dir);  // 0

enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
};

let c: Colors = Colors.Blue;
// console.log(c);

// ? Optional Properties
type User = {
    name: string;
    age?: number;  // Optional
};

const user1: User = { name: "Raza" };
const user2: User = { name: "Ali", age: 22 };
// console.log(user1);
// console.log(user2);


// READONLY Property
type Car = {
    readonly id: number;
    model: string
};
const myCar: Car = { id: 1, model: "Civic" };
myCar.model = "Corrolla";  // It's possible
// myCar.id = 2;   // Not Allowed

// Tuples
let student: [string, number];
student = ["Raza", 23];    // Correct
// student = [23, "Raza"];    // InCorrect

// With Label
type userTuple = [name: string, age: number];
