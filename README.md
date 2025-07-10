# TypeScript Learning Modules

This repository contains two main modules for learning TypeScript:

- **basics/**: Covers foundational TypeScript concepts.
- **adv/**: Explores advanced TypeScript features.

Each topic is explained in depth below, with examples and best practices.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Basic Types](#basic-types)
3. [Arrays](#arrays)
4. [Functions](#functions)
5. [Objects & Type Aliases](#objects--type-aliases)
6. [Interfaces](#interfaces)
7. [Union Types](#union-types)
8. [Intersection Types](#intersection-types)
9. [Literal Types](#literal-types)
10. [Enums](#enums)
11. [Optional & Readonly Properties](#optional--readonly-properties)
12. [Tuples](#tuples)

---

## Getting Started

TypeScript is a statically typed superset of JavaScript that adds type safety and powerful features for large-scale development. To run the examples, ensure you have TypeScript installed:

```bash
npm install -g typescript
```

Compile TypeScript files with:

```bash
tsc <filename>.ts
```

---

## 1. Basic Types

TypeScript provides several built-in types:

- `number`: For all numeric values.
- `string`: For text.
- `boolean`: For true/false values.
- `any`: For variables that can hold any type (use sparingly).
- `unknown`: For variables with unknown type (safer than `any`).
- `null` and `undefined`: For absence of value.

**Example:**

```typescript
let age: number = 23;
let myName: string = "Raza";
let isAdult: boolean = true;
let students: any = ["Raza Ali", 23];
const x: null = null;
```

---

## 2. Arrays

TypeScript allows you to specify the type of array elements:

```typescript
let quantities: number[] = [34, 3534, 90, 98, 74];
let fruits: string[] = ["apple", "peach"];
```

---

## 3. Functions

TypeScript enforces type safety for function parameters and return types:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

function greet(): void {}
```

- `void` indicates the function does not return a value.

---

## 4. Objects & Type Aliases

You can define the shape of objects inline or using type aliases:

**Inline Object:**

```typescript
let user: { name: string; age: number } = {
  name: "Raza A",
  age: 23,
};
```

**Type Alias:**

```typescript
type User = {
  name: string;
  age: number;
};
let person: User = {
  name: "Ali Hamza",
  age: 32,
};
```

- Type aliases improve code readability and reusability.

---

## 5. Interfaces

Interfaces define contracts for object shapes and are extendable:

```typescript
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
const item: Product = {
  name: "MacBook Pro M1",
  price: 299,
  isAvailable: true,
};
```

- Interfaces are preferred for defining object structures, especially in large codebases.

---

## 6. Union Types

Union types allow a variable to hold more than one type:

```typescript
let value: string | number;
value = "Hello World";
value = 23;
// value = true; // Not Allowed

function printId(id: number | string) {
  console.log("ID", id);
}
```

- Use unions to accept multiple types for a variable or parameter.

---

## 7. Intersection Types

Intersection types combine multiple types into one:

```typescript
type A = { name: string };
type B = { age: number };
type Person = A & B;
const user: Person = {
  name: "Ali",
  age: 23,
};
```

- Useful for composing complex types from simpler ones.

---

## 8. Literal Types

Literal types restrict a variable to specific values:

```typescript
let stat: "success" | "error" | "loading";
stat = "success"; // correct
// stat = "failed";   // error

function handleRequest(state: "pendding" | "success" | "error") {
  console.log("Request is ", state);
}
```

- Ensures only allowed values are assigned.

---

## 9. Enums

Enums define a set of named constants:

```typescript
enum Direction {
  North,
  South,
  East,
  West,
}
let dir: Direction = Direction.South;
console.log(dir); // 1

enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
let c: Colors = Colors.Blue;
```

- Enums can be numeric or string-based.
- Use enums for a set of related constants.

---

## 10. Optional & Readonly Properties

**Optional Properties:**

```typescript
type User = {
  name: string;
  age?: number; // Optional
};
const user1: User = { name: "Raza" };
const user2: User = { name: "Ali", age: 22 };
```

- The `?` makes a property optional.

**Readonly Properties:**

```typescript
type Car = {
  readonly id: number;
  model: string;
};
const myCar: Car = { id: 1, model: "Civic" };
myCar.model = "Corrolla"; // Allowed
// myCar.id = 2;   // Not Allowed
```

- `readonly` ensures a property cannot be changed after initialization.

---

## 11. Tuples

Tuples are fixed-length arrays with specified types for each element:

```typescript
let student: [string, number];
student = ["Raza", 23];    // Correct
// student = [23, "Raza"];    // Incorrect

type userTuple = [name: string, age: number];
```

- Tuples are useful for representing structured data with a known number of elements.

---

## Best Practices

- Prefer `interface` for object shapes, use `type` for unions/intersections.
- Use `any` and `unknown` sparingly.
- Always annotate function parameters and return types.
- Use enums and literal types for clear, maintainable code.

---

## Further Reading

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

This documentation covers all the concepts demonstrated in the `basics/` and `adv/` modules. For hands-on learning, explore and modify the code in each module.
