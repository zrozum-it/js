# JS014 — Boolean

## Co to jest?

`Boolean` to typ danych w JavaScript, który może mieć tylko dwie wartości:

```js
true
false
```

Możemy użyć ich do opisania sytuacji, które mają tylko dwa możliwe stany.

Na przykład użytkownik może być:

- zalogowany,
- niezalogowany.

```js
let isLoggedIn = false;
```

Zmienna `isLoggedIn` przechowuje wartość `false`.

---

## Po co istnieje?

W programach często potrzebujemy przechowywać informacje, na które możemy odpowiedzieć:

**tak albo nie**

**prawda albo fałsz**

Na przykład:

- Czy użytkownik jest zalogowany?
- Czy płatność została wykonana?
- Czy światło jest włączone?

Do reprezentowania takich dwóch stanów możemy wykorzystać wartości Boolean.

---

## Jak działa?

Wyobraź sobie **przełącznik światła**.

Może znajdować się w jednym z dwóch stanów:

**wyłączony → `false`**

**włączony → `true`**

Podobnie możemy przedstawić status użytkownika:

```js
let isLoggedIn = false;
```

Wartość `false` oznacza, że użytkownik nie jest zalogowany.

Jeżeli jego status się zmieni, możemy przypisać:

```js
isLoggedIn = true;
```

Teraz wartością zmiennej jest `true`.

---

## Przykład

```js
let isLoggedIn = false;

console.log(isLoggedIn);
// false

isLoggedIn = true;

console.log(isLoggedIn);
// true
```

Na początku:

```text
isLoggedIn → false
```

Później:

```text
isLoggedIn → true
```

Zmienna może więc reprezentować aktualny stan użytkownika.

---

## Najczęstszy błąd

### `true` i `false` nie są tekstem

Wartości Boolean zapisujemy:

```js
true
false
```

a nie:

```js
"true"
"false"
```

To nie jest to samo.

```js
let isLoggedIn = true;
```

przechowuje wartość typu Boolean.

Natomiast:

```js
let isLoggedIn = "true";
```

przechowuje tekst, czyli wartość typu String.

Cudzysłowy zmieniają więc rodzaj przechowywanej wartości.

---

## Zapamiętaj

- Boolean to jeden z typów danych w JavaScript.
- Boolean ma tylko dwie wartości: `true` i `false`.
- `true` możemy rozumieć jako prawdę lub „tak”.
- `false` możemy rozumieć jako fałsz lub „nie”.
- Boolean przydaje się do reprezentowania dwóch możliwych stanów.
- `true` i `"true"` to nie to samo.
- `false` i `"false"` to nie to samo.

> **Boolean → dwa możliwe stany: `true` albo `false`.**