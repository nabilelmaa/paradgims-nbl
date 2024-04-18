// Generate an observable that emits numbers from 1 to 5 using interval(500).
// Use pipe with multiple map operators to perform sequential
// operations (e.g., double the value, add 10, square the result),
// then subscribe to print the final transformed values.

import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

const observable$ = interval(500).pipe(
  take(5),
  map((x) => x + 1),
  map((x) => x * 2),
  map((x) => x + 10),
  map((x) => x * x)
);

observable$.subscribe({
  next: (result) => {
    console.log(result);
  },
  error: (err) => {
    console.error(err.message);
  },
  complete: () => {
    console.log("Observable completed.");
  },
});

/*
0 => 1 => 2 => 12 => 144
1 => 2 => 4 => 14 => 196
2 => 3 => 6 => 16 => 256 
3 => 4 => 8 => 18 => 324
4 => 5 => 10 => 20 => 400
*/
