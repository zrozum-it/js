# JS020 — typeof

## What is it?

`typeof` is a JavaScript operator that lets us check the type of a value.

Think of it like a **label scanner**.

We give JavaScript a value, and `typeof` tells us what kind of value it is.

```js
typeof 42;
```

returns:

```js
"number"
```

---

## Why does it exist?

JavaScript works with different types of values:

- strings
- numbers
- booleans
- undefined
- symbols
- bigints
- objects

Sometimes we need to know:

> What type of value am I working with?

`typeof` gives us a quick way to check.

---

## How does it work?

We write `typeof` before a value:

```js
typeof "hello";
typeof 42;
typeof true;
```

JavaScript checks the value and returns information about its type.

```js
typeof "hello"; // "string"
typeof 42;      // "number"
typeof true;    // "boolean"
```

`typeof` does not change the value.

It only gives us information about it.

---

## What does typeof return?

For the types we have learned so far:

```js
typeof "hello";       // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof Symbol("id");  // "symbol"
typeof 123n;          // "bigint"
typeof {};            // "object"
```

There is something important about these results:

```text
"string"
"number"
"boolean"
"undefined"
"symbol"
"bigint"
"object"
```

They are all written inside quotation marks.

That's because `typeof` returns the **name of the type as a string**.

---

## The result of typeof is always a string

For example:

```js
typeof 42;
```

returns:

```js
"number"
```

It does not return the `number` type itself.

It returns the text:

```js
"number"
```

We can even check the result again:

```js
typeof typeof 42;
```

The first check:

```js
typeof 42;
```

returns:

```js
"number"
```

And `"number"` is a string.

So the second `typeof` returns:

```js
"string"
```

---

## Two special cases

There are two `typeof` results worth remembering because they may be surprising.

### 1. null

We already know that `null` is a primitive value.

But:

```js
typeof null;
```

returns:

```js
"object"
```

This is a historical quirk of JavaScript.

It does **not** mean that `null` is actually an object.

---

### 2. Functions

Functions are a special kind of object in JavaScript.

But:

```js
typeof function () {};
```

returns:

```js
"function"
```

This does **not** mean that JavaScript has a separate `function` data type.

`"function"` is a special result produced by `typeof` for functions.

We will learn more about functions later.

---

## Common mistake

A common mistake is assuming that every result of `typeof` corresponds exactly to one of JavaScript's data types.

Usually it does:

```js
typeof 42;      // "number"
typeof "hello"; // "string"
typeof true;    // "boolean"
```

But there are exceptions:

```js
typeof null;            // "object"
typeof function () {};  // "function"
```

So `typeof` is very useful, but its results do not match JavaScript's list of data types perfectly 1:1.

---

## Remember

- `typeof` lets us check the type of a value.
- We write `typeof` before the value we want to check.
- It does not change the value.
- The result of `typeof` is always a string.
- `typeof null` returns `"object"`.
- Functions return `"function"`.
- `"function"` is a special `typeof` result, not a separate JavaScript data type.

---

## Next lesson

**JS021 — Comparison operators**

We already know that these are different types of values:

```js
42
"42"
```

But will JavaScript consider them equal?

That's what we'll find out next.