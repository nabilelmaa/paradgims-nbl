import { Observable, Observer } from "rxjs";

const observable = new Observable<number>((observer: Observer<number>) => {
    const n = 9;
    for (let i = 0; i < n; ++i) {
        observer.next(i);
    }   
    observer.complete();
});

// const observer1: Observer<number> = {
//     next: (x: number) => console.log(x),
//     complete: () => console.log('Thank you from observer 1.')
// };

// const observer2: Observer<number> = {
//     next: (x: number) => console.log(x),
//     complete: () => console.log('Thank you from observer 2.')
// };

// observable.subscribe(observer1);
// observable.subscribe(observer2);
