// Create an observable that emits an array of strings (e.g., ["hello", "world", "rxjs", "exercise"])
// using of. Use pipe with the map operator to transform each string by appending "!" to the end,
// then subscribe to print the modified strings.

import { of } from "rxjs";
import { map } from "rxjs/operators";

const observable$ = of(["hello", "world", "rxjs", "exercise"]);

const modifiedObservable$ = observable$.pipe(
  map((words) => words.map((word) => word + "!"))
);

modifiedObservable$.subscribe({
  next: (words) => {
    words.forEach((word, index) => {
      console.log(word);
    });
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
