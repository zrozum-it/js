// typeof lets us check the type of a value.

console.log(typeof "hello");       // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof Symbol("id"));  // "symbol"
console.log(typeof 123n);          // "bigint"
console.log(typeof {});            // "object"


// Important:
// typeof returns a string.

console.log(typeof 42);            // "number"
console.log(typeof typeof 42);     // "string"


// Two special cases:

console.log(typeof null);          // "object"
console.log(typeof function () {}); // "function"