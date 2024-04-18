//Create an observable that emits numbers from 1 to 5 using interval(1000). Use pipe with the map operator
//to delay each emitted value by its index (e.g., emit 1 after 1 second, 2 after 2 seconds, etc.),
//then subscribe to print the delayed values.

import { interval } from "rxjs";
import { delay, map } from "rxjs/operators";

const observable$ = interval(1000).pipe(
  map((x) => x + 1),
  delay((value) => value * 1000)
);

observable$.subscribe({
  next: (value) => {
    console.log(`${value}`);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
