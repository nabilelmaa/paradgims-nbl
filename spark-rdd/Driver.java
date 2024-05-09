import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.JavaRDD;
import java.util.List;
import java.util.Arrays;

public class Driver {
    private final static String APP_NAME = "MySparkApp";
    private final static String APP_MASTER = "local[*]";

    public static void main(String[] args) {
        SparkConf conf = new SparkConf().setAppName(APP_NAME).setMaster(APP_MASTER);
        JavaSparkContext sc = new JavaSparkContext(conf);

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        JavaRDD<Integer> numbersRDD = sc.parallelize(numbers);
        JavaRDD<Integer> filteredRDD = numbersRDD.filter(x -> x % 2 == 0);
        JavaRDD<Integer> squareFilteredRDD = filteredRDD.map(x -> x * x);
        int sumOfRDD = squareFilteredRDD.reduce((a, b) -> a + b);

        sc.stop();
    }
}
