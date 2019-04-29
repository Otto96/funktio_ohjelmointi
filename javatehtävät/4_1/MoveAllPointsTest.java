import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;

class MoveAllPointsTest {

	@Test
	public void testmoveAllPointsRightBy() throws Exception {
		List<Point> points = Arrays.asList(new Point(5,5), new Point(10,5));
		List<Point> expectedPoints = Arrays.asList(new Point(15,5), new Point(20,5));
		List<Point> newPoints = Point.moveAllPointsRightBy(points, 10);
		assertEquals(expectedPoints.get(0).getX(), newPoints.get(0).getX());
		assertEquals(expectedPoints.get(1).getX(), newPoints.get(1).getX());
	}
}
