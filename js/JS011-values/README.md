# JS011 — Values

## What is a value?

A value is the information stored inside a variable.

Whenever you assign something to a variable, you are assigning a value.

Think of a variable as a labeled box.

The value is whatever you put inside that box.

---

## Why do values exist?

Programs work with values all the time.

They read them, compare them, modify them, and use them to make decisions.

Without values, variables would just be empty boxes.

---

## What is a data type?

Not every value is the same.

Some values represent text.

Some represent numbers.

Others represent true or false.

To distinguish between them, every value in JavaScript has a **data type**.

A data type tells JavaScript what kind of information a value represents.

---

## JavaScript data types

JavaScript has **eight fundamental data types**.

### Primitive data types

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Object type

- Object

Arrays and functions are also objects in JavaScript.

You'll learn about each of these types in future lessons.

---

## Example

```javascript
const userName = "Milena";
const age = 25;
const isLoggedIn = true;
```

Each variable stores a different value.

Those values also have different data types.

- `"Milena"` → String
- `25` → Number
- `true` → Boolean

You'll learn why JavaScript recognizes them this way in the following lessons.

---

## Common mistake

A variable is **not** the same as its value.

The variable is the container.

The value is the information stored inside it.

---

## Remember

- A variable stores a value.
- Every value has a data type.
- JavaScript has eight fundamental data types.
- Understanding data types is essential because JavaScript treats different kinds of values differently.