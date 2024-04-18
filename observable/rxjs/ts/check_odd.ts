import { interval } from "rxjs";
import { filter } from "rxjs/operators";

const isOdd = (num:number):boolean => {
  return num % 2 !== 0;
};

//Or

//const isOdd = (num:number):boolean => num % 2 !== 0;

const observable$ = interval(1000).pipe(
  filter((x) => isOdd(x))
);

observable$.subscribe({
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
