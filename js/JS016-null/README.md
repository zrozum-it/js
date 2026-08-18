# JS016 — Null

## Co to jest?

`null` to specjalna wartość w JavaScript.

Używamy jej, kiedy chcemy **świadomie zaznaczyć, że w danym miejscu nie ma obecnie wartości**.

```js
let parkingSpot = null;
```

Zmienna `parkingSpot` istnieje, a jej aktualną wartością jest `null`.

To my zdecydowaliśmy, że chcemy przypisać jej właśnie taką wartość.

---

## Po co istnieje?

Czasami potrzebujemy zaznaczyć, że coś istnieje, ale obecnie nie ma przypisanej oczekiwanej wartości.

Wyobraź sobie **miejsce parkingowe**.

Miejsce istnieje, ale nie stoi na nim żaden samochód.

Możemy przedstawić taki stan za pomocą `null`:

```js
let parkingSpot = null;
```

Później sytuacja może się zmienić:

```js
parkingSpot = "ABC 123";
```

Teraz miejsce jest zajęte.

Jeżeli samochód odjedzie, możemy ponownie świadomie ustawić:

```js
parkingSpot = null;
```

Miejsce nadal istnieje — po prostu ponownie jest puste.

---

## Jak działa?

`null` jest wartością, którą sami możemy przypisać do zmiennej.

```js
let parkingSpot = null;
```

Nie oznacza to, że zmienna `parkingSpot` nie istnieje.

Oznacza to:

**zmienna istnieje, a jej wartością jest teraz `null`.**

---

## Przykład

```js
let parkingSpot = null;

console.log(parkingSpot);
// null

parkingSpot = "ABC 123";

console.log(parkingSpot);
// ABC 123

parkingSpot = null;

console.log(parkingSpot);
// null
```

Wartość zmiennej zmienia się więc:

```text
null → "ABC 123" → null
```

Najpierw miejsce jest puste, później pojawia się samochód, a następnie miejsce ponownie staje się puste.

---

## `null` a `undefined`

Obie wartości mogą kojarzyć się z brakiem czegoś, ale nie oznaczają dokładnie tego samego.

### `undefined`

```js
let userName;

console.log(userName);
// undefined
```

Nie przypisaliśmy zmiennej własnej wartości.

JavaScript automatycznie nadał jej wartość `undefined`.

Możemy to rozumieć jako:

> „Wartość nie została jeszcze określona.”

### `null`

```js
let parkingSpot = null;

console.log(parkingSpot);
// null
```

Tutaj sytuacja jest inna.

To my świadomie przypisaliśmy `null`.

Możemy to rozumieć jako:

> „Celowo zaznaczam, że obecnie nie ma tutaj wartości.”

Najprościej:

- `undefined` → wartość nie została jeszcze określona
- `null` → świadomie ustawiliśmy brak oczekiwanej wartości

---

## Najczęstszy błąd

### `null` nie oznacza, że zmienna nie istnieje

```js
let parkingSpot = null;
```

Zmienna `parkingSpot` istnieje.

Jej wartością jest `null`.

Dlatego warto pamiętać, że `null` samo w sobie jest **wartością w JavaScript**, której możemy użyć do reprezentowania zamierzonego braku innej wartości.

---

## Zapamiętaj

- `null` jest wartością w JavaScript.
- `null` przypisujemy świadomie.
- Zmienna z wartością `null` nadal istnieje.
- `null` może reprezentować zamierzony brak oczekiwanej wartości.
- `null` i `undefined` to dwie różne wartości.

> **`undefined` → wartość nie została jeszcze określona.**  
> **`null` → świadomie zaznaczyliśmy brak oczekiwanej wartości.**