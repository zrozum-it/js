# JS013 — Number

## What is Number?

`Number` is the JavaScript data type used to store numeric values.

Unlike text (`String`), numbers are written **without quotation marks**.

```javascript
let age = 23;
```

## Why does it exist?

Programs often need to work with numbers.

For example, they may store:

- age
- temperature
- score
- price
- distance

Because JavaScript knows these values are numbers, it can perform calculations and comparisons with them.

## How does it work?

Imagine a variable as a labeled box.

The label tells you what the value represents.

The value inside the box can be a number.

```javascript
let age = 23;
```

Here:

- `age` is the variable name.
- `23` is a value of type `Number`.

## Example

```javascript
let age = 23;
let temperature = 21.5;
let score = 100;
let year = 2026;

console.log(age);
console.log(temperature);
console.log(score);
console.log(year);
```

## Most common mistake

Putting quotation marks around a number.

```javascript
let age = "23";
```

This is **String**, not **Number**.

Correct:

```javascript
let age = 23;
```

## Remember

- `Number` stores numeric values.
- Numbers are written **without quotation marks**.
- JavaScript uses `Number` when it needs to count, compare, or perform calculations.