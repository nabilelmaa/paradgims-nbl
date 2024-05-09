import java.util.List;
import java.util.ArrayList;

public class Observable<T> {
    private List<Observer<T>> observers = new ArrayList<>();

    public void subscribe(Observer<T> observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer<T> observer) {
        observers.remove(observer);
    }

    protected final void notify(T notofication) {
        for (Observer<T> observer : observers) {
            observer.update(notofication);
        }
    }
}
