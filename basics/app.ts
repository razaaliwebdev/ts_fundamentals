


let age: number = 23;
let myName: string = "Raza";
let isAdult: boolean = true;
let students: any = ["Raza Ali", 23];
// console.log(typeof (students));
// let person: unknown = "Ali";
// console.log(typeof (person));

const x: null = null;


function greet(): void { };

let username: string = "Sabir";
let score: number = 340;
let isActive: boolean = false;


// Array Types
let quantities: number[] = [34, 3534, 90, 98, 74];
let fruits: string[] = ["apple", "peach"];

// FUNCTIONS
function sum(a: number, b: number): number {
    return a + b;
};

// console.log(sum(34, 8));

// INLINE Object
let user: { name: string, age: number } = {
    name: "Raza A",
    age: 23
};

// console.log(user);

// Type Aliases
type User = {
    name: string;
    age: number;
};

let person: User = {
    name: "Ali Hamza",
    age: 32
};
// console.log(person);

// Interfaces
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
};

const item: Product = {
    name: "MacBook Pro M1",
    price: 299,
    isAvailable: true
};

console.log(item);