# JS021 — Comparison Operators

Comparison operators allow us to compare two values.

JavaScript checks the comparison and gives us one of two answers:

```js
true
false
```

These are Boolean values.

In this lesson, we will focus on two equality operators:

- `==` — loose equality
- `===` — strict equality

---

## What are comparison operators?

A comparison operator asks a question about two values.

For example:

```js
5 === 5
```

We can think of it as asking:

> Are these two values equal?

JavaScript answers:

```js
true
```

If they are not equal, JavaScript returns:

```js
false
```

So a comparison does not change the values.

It checks them and returns a Boolean result.

---

## Why do comparison operators exist?

Programs often need to check whether something is true or false.

For example, we may want to know:

- Are two values equal?
- Are two values different?
- Is one number greater than another?

Comparison operators give JavaScript a way to answer questions like these.

For now, we will focus only on checking equality.

---

# Loose equality — `==`

The `==` operator is called **loose equality**.

It compares two values to determine whether they should be considered equal.

Example:

```js
5 == 5
```

Result:

```js
true
```

Both values are numbers and both contain the value `5`.

But something more interesting happens here:

```js
5 == "5"
```

We have two different types:

```js
5     // number
"5"   // string
```

Despite the different types, the result is:

```js
5 == "5" // true
```

Why?

Because `==` can perform **type conversion** when comparing values of different types.

JavaScript follows its equality rules and may convert a value before deciding whether the two values are equal.

That is why:

```js
5 == "5" // true
```

---

## What is type conversion?

Type conversion means changing a value from one data type into another.

For example:

```text
"5" → string
5   → number
```

With loose equality, JavaScript may perform a conversion when the types are different.

This allows values of different types to sometimes be considered equal.

---

# Strict equality — `===`

The `===` operator is called **strict equality**.

It compares both:

1. the type
2. the value

Unlike `==`, it does **not perform type conversion** to make values equal.

Let's use the same example:

```js
5 === "5"
```

We have:

```js
5     // number
"5"   // string
```

The values may look similar to us, but their types are different.

Therefore:

```js
5 === "5" // false
```

Now compare:

```js
5 === 5
```

Both values have:

- the same type → `number`
- the same value → `5`

So JavaScript returns:

```js
true
```

---

# `==` vs `===`

Let's put the same comparison side by side:

```js
5 == "5"   // true
5 === "5"  // false
```

Why are the results different?

### `==`

```text
5 == "5"
```

The types are different, but `==` allows type conversion according to JavaScript's equality rules.

Result:

```js
true
```

### `===`

```text
5 === "5"
```

No type conversion happens.

One value is a `number`.

The other is a `string`.

Result:

```js
false
```

So the important difference is:

```text
==   → comparison may involve type conversion

===  → comparison does not involve type conversion
```

---

## More examples

```js
10 == "10"    // true
10 === "10"   // false

7 == 7        // true
7 === 7       // true

"hello" == "hello"    // true
"hello" === "hello"   // true

5 == 10       // false
5 === 10      // false
```

Notice that `==` and `===` do not always produce different results.

If the values already have the same type, they will often give the same answer.

The difference becomes especially important when the compared values have different types.

---

## Most common mistake

A common mistake is thinking:

> `===` is just a more precise version of `==`.

That hides the most important difference.

The key is **type conversion**.

```text
==   → may perform type conversion

===  → does not perform type conversion
```

Understanding this is more useful than simply memorizing that one operator has two equal signs and the other has three.

---

## Which one should I use?

In everyday JavaScript code, `===` is usually preferred.

Why?

Because JavaScript does not perform type conversion before the comparison.

This makes the result easier to predict.

For example:

```js
5 === "5" // false
```

We can immediately see why:

```text
number !== string
```

This does **not** mean that `==` is broken or that it should be treated as an invalid operator.

`==` has defined rules and valid uses.

The important thing is to understand what it does.

---

## Remember

### `==` — loose equality

Checks whether two values should be considered equal.

It may involve type conversion.

```js
5 == "5" // true
```

### `===` — strict equality

Checks equality without type conversion.

Values of different types are not strictly equal.

```js
5 === "5" // false
```

### The main idea

```text
==   → equality with possible type conversion

===  → equality without type conversion
```

And in most everyday JavaScript code:

```js
===
```

is the preferred choice.

---

## Try it yourself

Before running the code, try to guess whether each comparison will return `true` or `false`:

```js
5 == "5"
5 === "5"

10 == 10
10 === 10

"hello" == "hello"
"hello" === "hello"

20 == "10"
20 === "20"
```

Then check your answers in `index.js`.

The goal is not to memorize the results.

Try to explain **why** JavaScript returns each one.