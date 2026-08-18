# JS015 — Undefined

## Co to jest?

`undefined` to jedna z wartości w JavaScript.

Możemy ją zobaczyć między innymi wtedy, gdy utworzymy zmienną za pomocą `let`, ale nie przypiszemy jej jeszcze własnej wartości.

```js
let userName;

console.log(userName);
// undefined
```

Zmienna `userName` istnieje, a jej aktualną wartością jest `undefined`.

---

## Po co istnieje?

JavaScript potrzebuje sposobu na reprezentowanie sytuacji, w której oczekiwana wartość nie została jeszcze określona.

Jeżeli utworzymy zmienną:

```js
let userName;
```

ale nie przypiszemy jej własnej wartości, JavaScript automatycznie nada jej wartość:

```text
undefined
```

Nie musimy robić tego sami.

---

## Jak działa?

Wyobraź sobie **pudełko z etykietą `userName`**.

Tworzymy pudełko:

```js
let userName;
```

ale jeszcze niczego do niego nie wkładamy.

Jeżeli teraz sprawdzimy wartość zmiennej:

```js
console.log(userName);
// undefined
```

otrzymamy `undefined`.

Później możemy przypisać zmiennej własną wartość:

```js
userName = "Anna";
```

Teraz:

```js
console.log(userName);
// Anna
```

Zmienna nadal jest tą samą zmienną, ale jej wartość się zmieniła.

---

## Przykład

```js
let userName;

console.log(userName);
// undefined

userName = "Anna";

console.log(userName);
// Anna
```

Na początku:

```text
userName → undefined
```

Po przypisaniu wartości:

```text
userName → "Anna"
```

---

## Najczęstszy błąd

### `undefined` nie oznacza automatycznie błędu

Kiedy pierwszy raz widzimy:

```text
undefined
```

łatwo pomyśleć, że coś poszło nie tak.

Ale w tym przykładzie:

```js
let userName;

console.log(userName);
// undefined
```

JavaScript działa prawidłowo.

Po prostu nie przypisaliśmy jeszcze zmiennej własnej wartości.

---

## Zapamiętaj

- `undefined` jest wartością w JavaScript.
- Zmienna może mieć wartość `undefined`.
- Zmienna zadeklarowana za pomocą `let` bez inicjalizacji otrzymuje wartość `undefined`.
- W tym przypadku JavaScript nadaje `undefined` automatycznie.
- Później możemy przypisać zmiennej inną wartość.
- Samo pojawienie się `undefined` nie oznacza automatycznie błędu.

> **`undefined` → oczekiwana wartość nie została jeszcze określona.**