import { of } from "rxjs";
import { map } from "rxjs/operators";


const words:string[] = ["hello", "world", "rxjs", "exercise"];

const observable$ = of(words);

const cusmtomedObservable$ = observable$.pipe(
    map((words) => words.map((word:string) => word + "!"))
)

cusmtomedObservable$.subscribe({
    next: (modifiedWords) => {
      console.log(`${modifiedWords}`);
    },
    error: (err) => {
      console.error("An error occurred:", err);
    },
    complete: () => {
      console.log("Observable complete.");
    },
  });
  
