# JS017 — Symbol

## Co to jest?

`Symbol` to jeden z typów prostych w JavaScript.

Służy do tworzenia **unikalnych wartości**.

Każde wywołanie `Symbol()` tworzy nową wartość typu `symbol`.

```js
const key1 = Symbol("door");
const key2 = Symbol("door");
```

Mimo że oba Symbole mają opis `"door"`, są dwiema różnymi wartościami.

```js
console.log(key1 === key2); // false
```

---

## Po co istnieje?

`Symbol` pozwala tworzyć wartości, które są **unikalne**.

Oznacza to, że nowo utworzonego Symbolu nie pomylimy z innym Symbolem — nawet jeśli oba mają dokładnie taki sam opis.

Praktyczne zastosowania Symboli poznamy później, gdy przejdziemy do obiektów.

Na tym etapie najważniejsze jest zrozumienie:

> Każde nowe wywołanie `Symbol()` tworzy nową, unikalną wartość.

---

## Jak tworzymy Symbol?

Nową wartość typu `symbol` tworzymy za pomocą `Symbol()`.

```js
const key = Symbol("door");
```

Rozłóżmy ten zapis na części:

```text
const key = Symbol("door");
      ↑       ↑       ↑
   zmienna  Symbol()  opis
```

### `key`

To nazwa zmiennej, w której przechowujemy utworzoną wartość.

### `Symbol()`

Tworzy nową wartość typu `symbol`.

### `"door"`

To **opis Symbolu**.

Opis pomaga nam rozpoznać Symbol, ale nie jest samą wartością i nie decyduje o jej unikalności.

---

## Jak wygląda Symbol?

Jeśli wyświetlimy Symbol:

```js
const key = Symbol("door");

console.log(key);
```

zobaczymy:

```text
Symbol(door)
```

`door` jest tutaj opisem Symbolu.

---

## Ten sam opis ≠ ten sam Symbol

Możemy utworzyć dwa Symbole z identycznym opisem:

```js
const key1 = Symbol("door");
const key2 = Symbol("door");
```

Po wyświetleniu oba mogą wyglądać tak samo:

```js
console.log(key1); // Symbol(door)
console.log(key2); // Symbol(door)
```

Ale nie są tą samą wartością:

```js
console.log(key1 === key2); // false
```

Dlaczego?

Ponieważ `Symbol()` zostało wywołane dwa razy.

Pierwsze wywołanie:

```js
Symbol("door")
```

tworzy jeden Symbol.

Drugie wywołanie:

```js
Symbol("door")
```

tworzy **kolejny, nowy Symbol**.

Opis może być taki sam. Wartości są różne.

---

## Metafora — dwa klucze

Wyobraź sobie fabrykę kluczy.

Za każdym razem, gdy wywołujesz:

```js
Symbol("door")
```

powstaje **nowy klucz**.

Możesz zamówić dwa klucze i do obu przyczepić identyczną zawieszkę:

```text
door
```

Zawieszka jest tylko opisem.

Nadal masz **dwa różne klucze**.

Tak samo:

```js
Symbol("door") !== Symbol("door")
```

---

## Czy ten sam Symbol może być użyty więcej niż raz?

Tak.

**Unikalny nie oznacza jednorazowy.**

To bardzo ważne rozróżnienie.

Możemy utworzyć jeden Symbol:

```js
const key1 = Symbol("door");
```

a następnie przypisać **ten sam Symbol** do innej zmiennej:

```js
const key2 = key1;
```

Teraz:

```js
console.log(key1 === key2); // true
```

Dlaczego?

Ponieważ `Symbol()` wywołaliśmy tylko raz.

```js
const key1 = Symbol("door");
const key2 = key1;
```

`key2` nie tworzy nowego Symbolu.

Obie zmienne odnoszą się do **tej samej wartości Symbol**.

---

## Nowy Symbol a ten sam Symbol

Porównajmy dwa przypadki.

### Dwa nowe Symbole

```js
const key1 = Symbol("door");
const key2 = Symbol("door");

console.log(key1 === key2); // false
```

`Symbol()` zostało wywołane dwa razy.

Powstały więc **dwie różne wartości**.

### Jeden Symbol przypisany do dwóch zmiennych

```js
const key1 = Symbol("door");
const key2 = key1;

console.log(key1 === key2); // true
```

`Symbol()` zostało wywołane tylko raz.

Nie tworzymy drugiego Symbolu.

---

## Najczęstszy błąd

Najczęstszym błędem jest myślenie, że taki sam opis oznacza taką samą wartość.

```js
const first = Symbol("door");
const second = Symbol("door");

console.log(first === second); // false
```

`"door"` jest tylko opisem.

Nie nadaje Symbolowi jego unikalności.

---

## Przykład

```js
const firstKey = Symbol("door");
const secondKey = Symbol("door");

console.log(firstKey);
console.log(secondKey);

console.log(firstKey === secondKey); // false

const sameKey = firstKey;

console.log(firstKey === sameKey); // true
```

Ten przykład pokazuje dwie najważniejsze rzeczy:

```text
Symbol("door") + Symbol("door")
        ↓
dwie różne wartości


Symbol("door") → key1 → key2
        ↓
    ta sama wartość
```

---

## Zapamiętaj

- `Symbol` jest typem prostym w JavaScript.
- Nową wartość typu `symbol` tworzymy za pomocą `Symbol()`.
- Każde nowe wywołanie `Symbol()` tworzy **nową, unikalną wartość**.
- Symbol może posiadać opis, np. `"door"`.
- Opis nie decyduje o unikalności Symbolu.
- `Symbol("door")` i `Symbol("door")` to dwie różne wartości.
- Jeden istniejący Symbol możemy przypisać do innej zmiennej.
- **Unikalny nie oznacza jednorazowy.**

Najważniejsze:

> **Nowe `Symbol()` = nowa wartość.  
> Przypisanie istniejącego Symbolu = ta sama wartość.**