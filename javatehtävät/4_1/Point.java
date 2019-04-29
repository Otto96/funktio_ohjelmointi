import java.util.List;
import java.util.stream.Collectors;

public class Point{
        private int x;
        private int y;

        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public int getX() {
            return x;
        }

        public void setX(int x) {
            this.x = x;
        }
        
        public Point moveRightBy(int x) {
            return new Point(this.x + x, this.y);
        }
        
        public static List<Point> moveAllPointsRightBy(List<Point> points, int x) {
    		return points.stream()
    				.map(p -> p.moveRightBy(x))
    				.collect(Collectors.toList());
    	}
}
