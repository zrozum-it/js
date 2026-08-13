# JS017 — Symbol

## Co to jest?

`Symbol` to jeden z typów prostych w JavaScript.

Służy do tworzenia unikalnych wartości.

Każdy nowo utworzony Symbol jest inną wartością — nawet jeśli dwa symbole mają dokładnie taki sam opis.

## Po co istnieje?

Symbol przydaje się wtedy, gdy potrzebujemy wartości, której nie da się przypadkowo pomylić z inną.

Jego praktyczne zastosowania zobaczymy później, gdy poznamy obiekty.

Na razie najważniejsze jest zrozumienie jednej rzeczy:

**każdy nowo utworzony Symbol jest unikalny.**

## Jak działa?

Symbol możemy utworzyć za pomocą `Symbol()`:

```js
const key1 = Symbol("door");
const key2 = Symbol("door");