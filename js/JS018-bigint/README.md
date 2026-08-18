# JS018 — BigInt

## Co to jest?

BigInt to jeden z prymitywnych typów danych w JavaScript.

Służy do przechowywania liczb całkowitych, również takich, które wychodzą poza bezpieczny zakres typu Number.

---

## Po co istnieje?

JavaScript posiada już typ Number, więc może pojawić się pytanie:

> Po co potrzebujemy jeszcze BigInt?

Number może przechowywać bardzo duże liczby, ale istnieje granica, po której nie każda liczba całkowita może być reprezentowana dokładnie.

BigInt pozwala pracować z liczbami całkowitymi poza tym bezpiecznym zakresem bez utraty precyzji.

---

## Metafora

Wyobraź sobie wagę z określoną skalą.

Dopóki ważony przedmiot mieści się w jej zakresie, możemy dokładnie odczytać wynik.

Ale w pewnym momencie wychodzimy poza skalę.

Podobnie możemy myśleć o Number.

BigInt pozwala nam pracować z liczbami całkowitymi również wtedy, gdy wychodzimy poza bezpieczny zakres Number.

---

## Jak tworzymy BigInt?

Do liczby całkowitej dodajemy literę `n`.

```js
const number = 123;
const bigInt = 123n;