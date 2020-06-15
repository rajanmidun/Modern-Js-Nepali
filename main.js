// Destructuring is a JavaScript expression that makes it possible to unpack
// values from arrays,or properties from objects, into distinct variables.

//Array destructuring'
// const names = ['ashish', 'suraj', 'rajan', 'tashi'];
// // const friend1 = names[0];
// // const friend2 = names[1];

// const [friend1, , , friend4] = names;

// console.log(friend1);
// console.log(friend4);

let a = 34;
let b = 56;

[b, a] = [a, b];
console.log(a);
console.log(b);
