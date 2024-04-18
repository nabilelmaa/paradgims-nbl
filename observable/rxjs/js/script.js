import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);

  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 1000);

  for (let i = 0; i < n; ++i) {
    observer.update(i);
  }
});

observable.subscribe((x) => {
  console.log(`Observer 1 received a value: ${x}`);
});
