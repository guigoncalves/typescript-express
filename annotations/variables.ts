let number: number = 10;
let string: string = "123";
let hasName: boolean = true;
let nothing: null = null;
let nothingAgain: undefined = undefined;

// built in
let date: Date = new Date();

// Array
const colors: string[] = ["red", "blue"];

// classes
class Car {
}
const car: Car = new Car();

// literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const doSomething: (i: number) => void = (i) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS

// 1) function that return any
const json = '{ "x":"3", "y":"4" }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// When declare variable later
let myAge: number;
myAge = 25;

//when it is impossible to define the type
let value: boolean | number = -1;
value = false;
