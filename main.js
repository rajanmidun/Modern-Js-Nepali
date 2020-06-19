//-----------------SPREAD OPERATOR--------------------
//FOR ARRAY
const data1 = [1, 2, 3, 4, 5, 6];
const data2 = [7, 8, 9];

console.log(...data1);
//for concat
console.log(data1.concat(data2));
console.log([...data1, ...data2]);

//for adding new elements
console.log([...data1, ...data2, 34, 34, 34, 34]);

//FOR OBJECT
const obj1 = {
  name: "rajan",
  age: 23
}

const obj2 = {
  address: "sfsf",
  salary: 23
}

console.log({ ...obj1, ...obj2 });

//for adding new properties
console.log({ ...obj1, ...obj2, level: "bachelor" });

