import { range } from "rxjs";
import { filter, reduce, scan } from "rxjs/operators";

const observable$ = range(1, 10);

const manipulatedObservable$ = observable$.pipe(
  filter((x) => x % 2 === 0), // just even numbers
  reduce((acc, curr) => acc + curr, 0) //sum numbers using reduce function
);

manipulatedObservable$.subscribe({
  next: (result) => {
    console.log(result);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
