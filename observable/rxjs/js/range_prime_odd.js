// Create an observable that emits numbers from 1 to 20 using range(1, 20).
// Use pipe with the filter operator to only emit prime odd numbers, then subscribe to print the prime numbers.

import { range } from "rxjs";
import { filter, map } from "rxjs/operators";

const isOdd = (num) => {
  return num % 2 !== 0;
};

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const observable$ = range(1, 20);
const modifiedObservable$ = observable$.pipe(
  filter((x) => isPrime(x)),
  filter((x) => isOdd(x)),
  map((x) => x * 2)
);

modifiedObservable$.subscribe({
  next: (odd) => {
    console.log(odd);
  },
  error: (err) => {
    console.error(err.message);
  },
  complete: () => {
    console.log("Observable complete");
  },
});