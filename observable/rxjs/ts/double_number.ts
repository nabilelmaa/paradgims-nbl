//Generate an observable that emits numbers from 1 to 5 using interval(500).
//Use pipe with the map operator to double each emitted value that's an even number, then subscribe to print the modified values.

import { interval} from "rxjs";
import { filter, map, take } from "rxjs/operators";

const isEven = (num:number):boolean => {
  return num % 2 === 0;
};

const observable$ = interval(500).pipe(
  take(5), // Emiting only from 0 to 4. Only five numbers
  map((x) => x + 1), // since take starts from 0, we need to map through every element and add 1 to it, so that we will have from 1 to 5
  filter((x) => isEven(x)), //filtering only even numbers
  map((x) => x * 2) // doubling every even number
);

//subscribe takes an observer
observable$.subscribe({
  next: (doubled:number) => {
    console.log(`${doubled}`);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
