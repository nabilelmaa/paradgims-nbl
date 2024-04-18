
// Create an observable that emits numbers from 1 to 10 using interval(500). 
// Use pipe with the filter operator to only emit even numbers, then subscribe to print the even numbers.

import { interval } from "rxjs";
import { map, filter, take } from "rxjs/operators";

const isEven = (num) => {
    return num % 2 === 0;   
}

const observable$ = interval(500).pipe(
    take(10),
    map(x => x + 1),
    filter(x => isEven(x))
)

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
  

