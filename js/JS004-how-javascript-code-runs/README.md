# JS004 — How to Run JavaScript in the Browser

## What is a `.js` file?

A `.js` file is a file that contains JavaScript code.

It stores the instructions we want the browser to execute.

Creating a `.js` file alone is not enough.

The browser needs to know that this file should be loaded.

---

## Why does the `<script>` tag exist?

The browser does not automatically search for JavaScript files.

Instead, we have to tell it which file to load.

This is the job of the `<script>` tag.

It connects an HTML document with a JavaScript file.

---

## How does it work?

First, we create a JavaScript file.

**index.js**

```javascript
console.log("Hello!");
```

Then we connect it to our HTML document.

**index.html**

```html
<script src="index.js"></script>
```

When the browser reads this line, it loads the JavaScript file and executes its code.

---

## Where should the `<script>` tag be placed?

The most common place is right before the closing `</body>` tag.

This allows the browser to load the HTML first and then execute the JavaScript.

A single HTML document can also contain multiple `<script>` tags.

For example:

```html
<script src="menu.js"></script>
<script src="gallery.js"></script>
<script src="contact.js"></script>
```

The browser executes them in the order they appear.

---

## Bonus

You may also see code like this:

```html
<head>
    <script src="index.js" defer></script>
</head>
```

The `defer` attribute tells the browser to download the JavaScript file while it continues parsing the HTML.

The script is executed only after the entire HTML document has been loaded.

This is common in modern web applications.

---

## Remember

A `.js` file contains JavaScript code.

The `<script>` tag tells the browser which JavaScript file to load and execute.