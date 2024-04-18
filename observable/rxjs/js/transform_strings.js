import { of } from "rxjs";
import { map } from "rxjs/operators";

const observable$ = of("apple", "banana", "orange", "grape", "kiwi");

observable$.pipe(map((x) => x.toUpperCase())).subscribe({
  next: (word) => {
    console.log(`${word}`);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
