# JS009 — let, const and var

## What are `let`, `const` and `var`?

`let`, `const` and `var` are JavaScript keywords used to create variables.

They all create a variable, but each follows slightly different rules.

---

## Why are there three keywords?

When JavaScript was first released in **1995**, developers could create variables using only one keyword:

```javascript
var
```

The word **`var`** is short for **variable**.

In **2015**, the **ES6 (ECMAScript 2015)** standard introduced two new keywords:

- `let`
- `const`

They were added to make working with variables more predictable and easier to understand.

Today, JavaScript has three keywords for creating variables.

---

## How do you create a variable?

Creating a variable is called a **declaration**.

A declaration consists of two parts:

- a keyword (`let`, `const` or `var`)
- a variable name

Example:

```javascript
let userName;
```

In this example:

- `let` is the keyword,
- `userName` is the variable name.

---

## A special rule for `const`

Unlike `let` and `var`, a variable declared with `const` must receive a value immediately.

✅ Correct:

```javascript
const country = "Poland";
```

❌ Incorrect:

```javascript
const country;
```

---

## Example

```javascript
let firstName;

var lastName;

const country = "Poland";
```

---

## Common mistake

Many beginners think `let`, `const` and `var` create different kinds of data.

They don't.

They all create variables.

The difference is in the rules that apply to each of them.

---

## Remember

- `let`, `const` and `var` are keywords used to create variables.
- `var` was the original keyword introduced in 1995.
- `let` and `const` were added in ES6 (2015).
- Creating a variable is called **declaration**.
- `const` must receive a value when it is declared.