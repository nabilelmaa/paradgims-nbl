// Create an observable that emits numbers from 1 to 50 using interval(500). 
// Use pipe with multiple filter operators to filter out numbers that are not prime and are odd, 
// then subscribe to print the filtered prime numbers.

import { interval } from "rxjs";
import { filter } from "rxjs/operators";

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const observable$ = interval(500).pipe(
    filter((x) => !isPrime(x)), // Filter prime numbers
    filter((x) => x % 2 !== 0), // Filter odd numbers
    filter((x) => x <= 50) // Filter numbers less than or equal to 50
);

observable$.subscribe({
    next: (value) => {
        console.log(`${value} is NOT a filtered prime number.`);
    },
    error: (err) => {
        console.error("An error occurred:", err);
    },
    complete: () => {
        console.log("Observable complete.");
    },
});
