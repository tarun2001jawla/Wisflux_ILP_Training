# ASsignment-1 Day-8

## 1.. What are the basic data types in TypeScript?

- number
- string
- boolean
- any
- void
- null
- undefined
- never

## 2.What is Generic data type?

A generic data type allows us to create reusable components and we can work with different data type rather than using one specific data type.

```typescript
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair: Pair<number, string> = { first: 10, second: "hello" };
```

## 3.What is type inferring in TypeScript?

When we don't explicitly assign a type to a variable or function then the typescript compiler will infer the type of the variable or function.

```typescript
let a = 10; // a is inferred as number
let b = "hello"; // b is inferred as string
```

Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

## 4.What are the possible ways to define typing for functions?

In TypeScript, there are several ways to define typing for functions:

1. **Explicit Parameter Types**: You can explicitly specify the types of function parameters using colon (`:`) notation.
   ```typescript
   function add(x: number, y: number): number {
     return x + y;
   }
   ```
2. **Return Type Annotation**

In TypeScript, you can annotate the return type of a function using colon (`:`) notation after the parameter list. Here's an example:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

3. **Type inference** is a feature in TypeScript where the compiler automatically deduces the types of variables, parameters, and return values based on the context and usage within the code. This eliminates the need for explicit type annotations in many cases, making the code more concise and readable.

```typescript
function isEven(num) {
  return num % 2 === 0;
}
```

## 5.How to define Generic type for Classes?

A generic class has generic fields or methods. It certifies that the specified data types are used consistently throughout the class.

## Define Generic Type for Classes in TypeScript

```typescript
// Define a generic class Box<T> that can hold a value of type T
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Create a Box instance with number type
const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // Output: 10

// Update the value
numberBox.setValue(20);
console.log(numberBox.getValue()); // Output: 20

// Create a Box instance with string type
const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Output: Hello

// Update the value
stringBox.setValue("World");
console.log(stringBox.getValue()); // Output: World
```
