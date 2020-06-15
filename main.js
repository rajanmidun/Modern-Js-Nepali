// Destructuring is a JavaScript expression that makes it possible to unpack
// values from arrays,or properties from objects, into distinct variables.

//Object destructuring
const info = {
  name: "Suraj",
  address: "Kathmandu",
  phoneNumber: "9834923423"
}
const { name: username, address, phoneNumber } = info;

console.log(username);
console.log(address);
console.log(phoneNumber);
