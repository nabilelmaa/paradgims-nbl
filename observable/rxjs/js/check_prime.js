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

const observable$ = interval(1000).pipe(
    filter(x => isPrime(x)) // Emit only prime numbers
);

observable$.subscribe({
    next: (prime) => {
        console.log(`${prime} is a prime number.`);
    },
    error: (err) => {
        console.error('An error occurred:', err);
    },
    complete: () => {
        console.log('Observable complete.');
    }
});
