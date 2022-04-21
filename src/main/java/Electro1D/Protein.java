package main.java.Electro1D;

import java.awt.Color;
import java.awt.Graphics;

/**
 * @author Bader Alharbi
 */
public class Protein {

	int concentration;
	double startY;
	public float scaleFactor;
	public double relativeMigration;
	public double speed;
	public int mw;
	public float charge;
	public String name;
	public String fullName;
	public String abbr;
	public boolean selected;
	public Color color;
	public double x1;
	public double y1;
	public int width;
	public int height;
	public double y1float;
	public int maxPosition;
	public double distance;
	private int decider;
	private int counter;
	public int plotYPos;
	public int plotXPos;

	public void setStartPosition(int x, int y) {
		x1 = x;
		y1 = y;
		startY = y1;
		y1float = y1;
	}

	public void resetDecider() {
		decider = 1;
		counter = 1;
	}

	private void incrPosition() {
		if (counter == decider) {
			y1float = y1float + speed;
			counter = 1;
		} else {
			counter++;
		}
		y1 = (int) y1float;
	}

	public boolean matchPosition(int x, int y) {
		double x2 = x1 + width;
		double y2 = y1 + height;
		int range = 2;
		return (x >= x1 - range && x <= x2 + range && y >= y1 - range && y <= y2 + range);
	}

	public void setWidth(int w) {
		width = w;
	}

	public int getDecider() {
		return decider;
	}

	public void setDecider(int i) {
		decider = i;
	}

	void setHostScaleFactor(float f) {
		scaleFactor = f;
	}

	public void setMaxPosition(int i) {
		maxPosition = i;
	}

	public void setConcentration(int i) {
		concentration = i;
	}

	boolean matchPlotPosition(int x, int y) {
		int range = 3;
		return (x >= plotXPos - range && x <= plotXPos + range && y >= plotYPos - range && y <= plotYPos + range);
	}

	public double getDistance() {
		distance = scaleFactor * (y1 - startY);
		return distance;
	}

	Protein() {
		speed = 0.01D;
		name = "notSet";
		fullName = "notSet";
		abbr = "notSet";
		color = Color.blue;
		height = 2;
		decider = 1;
		counter = 1;
		concentration = 1;
	}

	public Protein(String name, String fullName, String abbr, int i, Color color1) {
		speed = 0.01D;
		color = Color.blue;
		height = 2;
		decider = 1;
		counter = 1;
		this.name = name;
		this.fullName = fullName;
		this.abbr = abbr;
		mw = i;
		color = color1;
		concentration = 1;
	}

	public boolean drawProtein(Graphics g) {
		if (y1 >= maxPosition) {
			return false;
		}
		g.setColor(color);
		if (concentration == 1) {
			g.fillRect((int) x1, (int) y1, width, height);
		} else {
			g.fillRect((int) x1 - concentration, (int) y1, width + concentration * 2, height + concentration);
		}
		incrPosition();
		return true;
	}

	public String toString() {
		return "Protein: name=" + name + " fullName=" + fullName + " MW=" + mw + " rm=" + relativeMigration + " d=" + distance;
	}
}