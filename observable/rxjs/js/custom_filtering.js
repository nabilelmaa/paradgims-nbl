// Generate an observable that emits random numbers between 1 and 1000 using interval(1000). 
// Use pipe with a custom filter operator to filter out numbers that are divisible by 5, 
// then subscribe to print the filtered values.

import { interval } from "rxjs";
import { filter } from "rxjs/operators";

const observable$ = interval(1000).pipe(
    filter(() => {
        const random = Math.floor(Math.random() * 1000) + 1;
        return random;
    }),
    filter(x => x % 5 === 0)
)

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
  