# JS002 — Where Does JavaScript Run?

## Where does JavaScript run?

JavaScript cannot run on its own.

It needs an environment that can execute it.

The two most common environments are:

- a web browser,
- Node.js.

Although both run JavaScript, they provide different capabilities.

---

## Browser

A web browser allows JavaScript to interact with a webpage.

For example, JavaScript can:

- respond to button clicks,
- update the page without reloading it,
- validate forms,
- change HTML elements.

---

## Node.js

Node.js allows JavaScript to run outside of a web browser.

Instead of working with a webpage, it can work with the computer or a server.

For example, JavaScript can:

- read and write files,
- create web servers,
- communicate with databases,
- handle network requests.

---

## Same language, different environment

The JavaScript language does not change.

Only the environment changes.

Each environment provides its own tools and features.

That is why some code works only in a browser, while other code works only in Node.js.

The environment can also give JavaScript additional capabilities.

We'll discover them step by step in the next lessons.

---

## Example

The following code works in both environments:

```js
console.log("Hello from JavaScript!");
```

If you run it in a browser, the message appears in the browser console.

If you run it with Node.js, the message appears in the terminal.

---

## Common misconception

Many beginners think that JavaScript only runs in a browser.

That isn't true.

JavaScript can also run outside the browser, for example with Node.js.

---

## Remember

JavaScript is a language.

The environment gives it capabilities.

---

## What's next?

In the next lesson, we'll learn what a JavaScript engine is and how JavaScript code is executed.