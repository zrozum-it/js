# JS010 — Assignment Operator (`=`)

## What is the assignment operator?

The assignment operator (`=`) is used to store a value inside a variable.

It tells JavaScript:

> Put the value on the right into the variable on the left.

For example:

```js
let userName = "Milena";
```

JavaScript stores the value `"Milena"` inside the variable called `userName`.

---

## Why does it exist?

Variables are useful because they can store information.

Without the assignment operator, a variable would have no value to work with.

The assignment operator is what allows us to save data that can be used later in our program.

---

## How does it work?

```js
let userName = "Milena";
```

Let's break it down:

- `let` creates a new variable.
- `userName` is the variable name.
- `=` is the assignment operator.
- `"Milena"` is the value.

The value on the **right** is stored in the variable on the **left**.

---

## Initialization

The first time a value is assigned to a variable is called **initialization**.

```js
let userName = "Milena";
```

Here, the variable is created and receives its first value.

---

## Variable names

A good variable name should clearly describe what the variable stores.

JavaScript developers usually use **camelCase**.

Example:

```js
userName
totalPrice
isLoggedIn
```

Basic rules:

- Start with a letter, `$`, or `_`.
- Don't start with a number.
- Variable names are case-sensitive.
- Don't use JavaScript keywords such as `let`, `const`, or `if`.

---

## Example

```js
let userName = "Milena";

console.log(userName);
```

Output:

```text
Milena
```

---

## Common mistake

Many beginners think that `=` means **equals**.

In JavaScript, `=` **assigns** a value to a variable.

Comparison operators will be covered in a future lesson.

---

## Remember

- `=` assigns a value to a variable.
- The variable is on the left.
- The value is on the right.
- The first assignment is called **initialization**.
- Good variable names make code easier to read.