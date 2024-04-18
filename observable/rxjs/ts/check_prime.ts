import { filter } from "rxjs/operators";
import { interval } from "rxjs";

const isPrime = (num:number):boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const observable = interval(1000).pipe(
    filter(x => isPrime(x)) // Emit/create only prime numbers
)

observable.subscribe({
    next: (prime) => {
        console.log(`${prime} is a prime number.`);
    },
    error: (err) => {
        console.error(err.message);
    },
    complete: () => {
        console.log('Observable complete');
    }
})