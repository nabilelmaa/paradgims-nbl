import { interval, range } from "rxjs";
import { map, filter } from "rxjs/operators";

const isEven = (num) => {
  return num % 2 === 0;
};

const range$ = range(1, 5);
range$.subscribe((x) => console.log(x));

const interval$ = interval(500);
interval$.subscribe((x) => console.log(x));

const observable$ = range$.pipe(
  filter((x) => isEven(x)), // Filter only even numbers
  map((x) => x * 2) // Double every even number
);

observable$.subscribe({
  next: (doubled) => {
    console.log(`${doubled}`);
  },
  error: (err) => {
    console.error("An error occurred:", err);
  },
  complete: () => {
    console.log("Observable complete.");
  },
});
