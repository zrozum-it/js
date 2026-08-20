// Loose equality ==
// JavaScript may convert types before comparing values.

console.log(5 == "5"); // true
console.log(10 == "10"); // true
console.log(5 == 10); // false


// Strict equality ===
// JavaScript compares both the value and the type.
// It does not convert types before comparison.

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log("hello" === "hello"); // true