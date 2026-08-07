# JS012 — String

## What is a string?

A string is a data type used to store text.

In JavaScript, text is written inside quotation marks.

```javascript
const firstName = "Milena";
```

---

## Why does it exist?

Strings allow us to store text, such as:

- names,
- words,
- sentences,
- messages,
- and anything else written as text.

---

## How does it work?

Think of a string as a note with text written on it.

The variable is the box.

The string is the note placed inside the box.

```javascript
const firstName = "Milena";
```

Here:

- `firstName` is the variable.
- `"Milena"` is the string.

---

## Example

```javascript
const city = "Kielce";
const language = "JavaScript";

console.log(city);
console.log(language);
```

---

## Common mistake

Many beginners think these values are the same:

```javascript
"25"
25
```

They are not.

- `"25"` is a string (text).
- `25` is a number.

Even though they look similar, JavaScript treats them as different data types.

---

## Remember

Everything written inside quotation marks is a string.

Even if it looks like a number, JavaScript treats it as text.