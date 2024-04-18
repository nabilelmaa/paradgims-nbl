import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

const observable = of(1, 2, 3, 4, 5);

observable
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe({
    next: (value) => {
        console.log(`Observer 1 received a value: ${value}`);
    }
  });
