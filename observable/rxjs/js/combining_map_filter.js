// Generate an observable that emits numbers from 1 to 10 using `interval(300)`.
// Use `pipe` with the `map` operator to square each emitted value and
// then use `filter` to only emit values less than 50, then subscribe to print the resulting values.

import { interval } from "rxjs";
import { map, filter } from "rxjs/operators";

const observable$ = interval(300).pipe(
  map((x) => x + 1), // Increment x by 1 to get values from 1 to infinity
  map((x) => x * x), // Square each emitted value
  filter((x) => x < 50) // Filter values less than 50
);

observable$.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
