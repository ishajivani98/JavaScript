//  Swap Two Variables Without a Third Variable
// Write a program to swap values of two variables without using a third variable.


// let a=10
// let b=20

// console.log('a value before swaping ', a)
// console.log('b value before swaping ',b)

// a=a+b
// b=a-b
// a=a-b

// console.log('now  value of a is :',a)
// console.log('now  value of b is :',b


// Using Array Destructuring 


let a = 10;
let b = 20;

console.log("Before Swapping:");
console.log("a =", a);
console.log("b =", b);

// Swap using destructuring
[a, b] = [b, a];

console.log("After Swapping:");
console.log("a =", a);
console.log("b =", b);