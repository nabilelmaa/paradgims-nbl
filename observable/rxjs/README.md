# Installation

1. **Install dependencies:**

   ```bash
   npm install

   ```

2. **Install RxJs Library**

   ```bash
   npm install rxjs
   ```

# List of Exercises

### Exercise 1: Filter Odd Numbers

Create an observable that emits numbers from 1 to 10 using `interval(1000)`. Use `pipe` to filter out odd numbers and subscribe to the observable to print the filtered values.

### Exercise 2: Double the Values

Generate an observable that emits numbers from 1 to 5 using interval(500).
Use pipe with the map operator to double each emitted value that's an even number, then subscribe to print the modified values.

### Exercise 3: Filter Prime Numbers

Create an observable that emits numbers from 1 to 20 using `interval(500)`. Use `pipe` with the `filter` operator to filter out non-prime numbers (you can reuse your `isPrime` function), then subscribe to print the prime numbers.

### Exercise 4: Transform Strings

Generate an observable that emits strings `"apple"`, `"banana"`, `"orange"`, `"grape"`, and `"kiwi"` using `of`. Use `pipe` with the `map` operator to transform each string to uppercase, then subscribe to print the modified strings.

### Exercise 5: Delayed Emits

Create an observable that emits numbers from 1 to 5 using `interval(1000)`. Use `pipe` with the `map` operator to delay each emitted value by its index (e.g., emit `1` after 1 second, `2` after 2 seconds, etc.), then subscribe to print the delayed values.

### Exercise 6: Custom Filtering

Generate an observable that emits random numbers between 1 and 1000 using `interval(1000)`. Use `pipe` with a custom filter operator to filter out numbers that are divisible by 5, then subscribe to print the filtered values.

### Exercise 7: Combining Filters

Create an observable that emits numbers from 1 to 50 using `interval(500)`. Use `pipe` with multiple `filter` operators to filter out numbers that are not prime and are odd, then subscribe to print the filtered prime numbers.

### Exercise 8: Combining Map and Filter

Generate an observable that emits numbers from 1 to 10 using `interval(300)`. Use `pipe` with the `map` operator to square each emitted value and then use `filter` to only emit values less than 50, then subscribe to print the resulting values.

### Exercise 9: Custom String Manipulation

Create an observable that emits an array of strings (e.g., `["hello", "world", "rxjs", "exercise"]`) using `of`. Use `pipe` with the `map` operator to transform each string by appending `"!"` to the end, then subscribe to print the modified strings.

### Exercise 10: Sequential Operations

Generate an observable that emits numbers from 1 to 5 using `interval(500)`. Use `pipe` with multiple `map` operators to perform sequential operations (e.g., double the value, add 10, square the result), then subscribe to print the final transformed values.

### Exercise 11: Emits Even Numbers Only

Create an observable that emits numbers from 1 to 10 using interval(500). Use pipe with the filter operator to only emit even numbers, then subscribe to print the even numbers.

### Exercise 12: Double Odd Numbers

Generate an observable that emits numbers from 1 to 5 using range(1, 5). Use pipe with the map operator to double each emitted value that's odd, then subscribe to print the modified values.

### Exercise 13: Filter Prime Numbers

Create an observable that emits numbers from 1 to 20 using range(1, 20). Use pipe with the filter operator to only emit prime numbers, then subscribe to print the prime numbers.

### Exercise 14: Transform and Filter Array

Create an observable that emits an array of numbers [10, 20, 30, 40, 50] using of. Use pipe with the map operator to divide each number by 10, then use filter to only emit values greater than 2, and finally, subscribe to print the modified values.

### Exercise 15: Delayed Emissions

Generate an observable that emits numbers from 1 to 3 using range(1, 3). Use pipe with the map operator to delay each emitted value by its index (e.g., emit 1 after 1 second, 2 after 2 seconds, etc.), then subscribe to print the delayed values.

### Exercise 16: Concatenation

Create two observables:

Observable 1: Emits numbers from 1 to 3 using interval(1000).
Observable 2: Emits strings ["a", "b", "c"] using of.
Use pipe with the appropriate operators to concatenate both observables such that numbers are emitted first, followed by strings, then subscribe to print the concatenated values.

### Exercise 17: Chaining Multiple Operators

Generate an observable that emits numbers from 1 to 10 using interval(500). Use pipe with multiple operators (filter, map, etc.) to transform the emitted values based on certain conditions (e.g., filter even numbers, square odd numbers), and then subscribe to print the transformed values.

# Quiz

### 1. Explain the Observer design pattern.

- The Observer design pattern establishes a one-to-many relationship where a subject (observable) maintains a list of observers. Observers can dynamically register(e.g. subscribe in the RxJs library) or unregister(unsubscribe) with the observable. When the state of the observable changes, it iterates through its list of observers and notifies them using specific methods like update() or next(). This notification mechanism allows the observable to push data or state changes to observers without being tightly coupled.

### 2. Explain the advantages of the Observer design pattern.

- Advantages include decoupling between subjects and observers and flexibility in adding/removing observers.Observers are notified automatically of state changes, eliminating the need for continuous polling/checking.

### 3. Explain what we mean by saying that Rx observables are cold.

- Rx observables are "cold" because they are lazy by nature; they do not produce data until someone subscribes. Each subscription creates a new and independent execution context of the observable sequence. Hence, this enables the planning and composition of operations before execution.

### 4. How does Rx enhance the Observer interface of the Observable design pattern?

- **Single Assignment**: In Rx, each observable typically manages a single observer, ensuring each subscriber has its dedicated execution context. Observers receive values emitted by the observable via the **`next()`** method.
- **Error Handling**: Observables in Rx notify observers of errors using the **`error()`** method. This allows for proper error propagation and handling within the observable sequence.
- **Completion Notification**: Rx observables can signal the end of the observable sequence by calling the observer's **`complete()`** method. This notifies subscribers that the observable has finished emitting values and won't produce anymore.

### 5. What are observers?

- These are objects that are interested in receiving updates or notifications from a subject (or observable) when its state changes. Observers are registered with the observable and are notified when the observable's state changes.

### 6. What is an Observable in the context of Reactive Extensions (Rx)?

- In Rx, an Observable represents a sequence of data or events over time that can be observed. It can asynchronously or synchronously emit multiple values or a single value, lazily (cold) or eagerly (hot), unicast to a single consumer (cold), or multicast to multiple consumers (hot).

### 7. Compare promises and Rx observables.

- **Execution Model**:
  - **Promises**: Promises execute immediately upon creation and resolve to a single value or error. They represent the result of a one-time asynchronous operation.
  - **Rx Observables**: Are lazy and only start producing values when subscribed to. They allow for planning and composing operations before execution, making them suitable for continuous data streams.
- **Flexibility and Planning**:
  - **Promises**: Lack of the ability to plan or compose operations before execution. Planning what we want to do while executing asynchronous operations; mixing planning and execution.
  - **Rx Observables**: Provide powerful composition capabilities with operators like `map`, `filter`, and `mergeMap`, enabling transformation and manipulation of asynchronous data streams before subscription.
- **Usage in I/O Libraries**:
  - **Promises**: Traditionally used for handling one-time asynchronous tasks.
  - **Rx Observables**: Increasingly adopted in modern I/O libraries (e.g., Angular's HttpClient) due to their composability and flexibility in managing continuous streams of asynchronous data.

### 8. Compare and contrast the Observer design pattern with the approach taken by RxJS.

- The Observer pattern directly manages relationships, while RxJS abstracts this with observables and operators for flexible stream handling.

### 9. Why might RxJS be more suitable for complex asynchronous operations compared to traditional Observer implementations?

- RxJS offers declarative and composable ways to handle asynchronous data streams, which can simplify complex operations compared to managing individual observers.

### 10. What does it mean for a program to be reactive?

- Being reactive means responding to changes or events in real-time, often with asynchronous data streams and declarative programming.

### 11. Discuss how reactive programming can simplify dealing with asynchronous data streams.

- Reactive programming provides tools to manipulate and react to asynchronous data streams declaratively, avoiding callback complexity.

### 12. Describe the role of operators in RxJS and why they are powerful.

- Operators in RxJS transform, filter, combine, or create new observables, providing powerful tools for stream manipulation.

### 13. How does error handling in RxJS improve upon traditional try/catch mechanisms in asynchronous programming?

- RxJS allows errors to be handled at specific points in observable streams using operators like `catchError`, offering more control and flexibility.

### 14. Explain the concept of multicasting in RxJS and how it is achieved.

- Multicasting in RxJS shares a single execution of an observable among multiple subscribers using subjects or `share` operator.

### 15. What is pipelining in RxJS, and how does it relate to operators?

- Pipelining in RxJS involves chaining multiple operators together using the `pipe` operator to transform or filter observables in a sequence.

### 16. Contrast promise-based asynchrony with Rx-based asynchrony.

- Promises handle single future values, while Rx observables manage sequences of values over time with flexible stream manipulation.

### 17. Write an RxJS piece of code that prints out a sequence of prime numbers, one after the other, each second. Assume we have a synchronous function called isPrime that checks whether a number is prime. (5 pts)

```bash
import { interval } from "rxjs";
import { filter } from "rxjs/operators";

const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const observable = interval(1000).pipe(
    filter(x => isPrime(x)) // Emit only prime numbers
);

observable.subscribe({
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
```

### 18. Write how the Observer interface will look like in Java.

```bash
public interface Observer<T> {
	   void update(T notification);
}
```

### 19. How would the method `update()` be implemented in the Observer class?

```bash
protected final void notify(T notification) {
   for (Observer<T> observer : observers) {
      observer.update(notification);
     }
}
```

### 20. Are observables async or sync?

- Observables are asynchronous, emitting values over time without blocking the main thread.

### 21. An RxObservable is described metaphorically as a recipe, what does recipe refer to in this context?

- A Function is just a recipe. When subscribing to the observer, then the function will start executing; since Observables are cold, you need a subscriber to use that recipe; it can't do anything by itself.
