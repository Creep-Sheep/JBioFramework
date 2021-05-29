package main.java.Electro2D; /**
 * This class compares two IEFProteins based on pI representation and
 * x values.
 *
 * @author Jill Zapoticznyj
 */

import java.util.Comparator;
import java.util.Vector;

public class CompIEF implements Comparator<IEFProtein> {

    private final double max;  //the maximum pH value for the IEF
    private final double min;  //the minimum pH value for the IEF
    private final double range;

    /**
     * Constructor for the Electro2D.CompIEF object
     *
     * @param _max the max value
     * @param _min the min value
     */
    public CompIEF(double _max, double _min) {
        max = _max;
        min = _min;
        range = 1 / (max - min);
    }

    /**
     * Compares two Electro2D.IEFProtein objects by their pI values and
     * x coordinate.  The method returns a 0 if they are equal,
     * a negative one if the 2nd object is greater than the first,
     * and a 1 if the first object is greater than the second.
     *
     * @param o1 the first Electro2D.IEFProtein object
     * @param o2 the second Electro2D.IEFProtein object
     * @return retVal
     */
    public int compare(IEFProtein i1, IEFProtein i2) {
        // the width of an Electro2D.IEFProtein bar
        double w34 = IEFProtein.returnWidth34();
        // the range each Electro2D.IEFProtein represents
        // get the objects' pI values and x coordinates
        double minpi1 = i1.getMinPI();
        double minpi2 = i2.getMinPI();
        double maxpi1 = i1.getMaxPI();
        double maxpi2 = i2.getMaxPI();

        int x1 = i1.returnX();
        int x2 = i2.returnX();

        // if the pI values are both greater than the max value for the range,
        // they are equal
        // if the pI values are both less than the min value for the range,
        // they are equal
        if (minpi1 >= max && minpi2 >= max
        		|| maxpi1 <= min && maxpi2 <= min) {
            return 0;
        }
        //if the x coordinates are within 1/2 the width of a bar of each other..
        //..and the pI values are within range of each other, they are equal
        if (w34 >= Math.abs(x2 - x1)
        		&& (minpi2 - minpi1 >= 0 && minpi2 - minpi1 <= range 
            		|| maxpi1 - maxpi2 >= 0 && maxpi1 - maxpi2 <= range)) {
                return 0;
        }
        // if the x coordinate of the first Electro2D.IEFProtein is greater than that of
        // the second, the first Electro2D.IEFProtein is greater.
        //else, the second was greater and retVal still equals -1.
        return (x1 > x2 ? 1 : -1);
    }

	public void sortBarProteins(Vector<IEFProtein> barProteins) {
        /**
         * This nested for loop will do a sort of collapsing exercise; every
         * protein in the barProtein vector will be evaluated by the Electro2D.CompIEF
         * class against every other protein, and if they're the same they'll
         * be collapsed into the same element.
         *
         * The for loops start out with their iterators at -1 the length of
         * barProteins so that they can access their elements in order correctly
         */
    	barProteins.sort(this);
        for (int i = barProteins.size() - 1; i >= 0; i--) {
        	IEFProtein p1 = (IEFProtein) barProteins.elementAt(i);
            for (int j = i - 1; j >= 0; j--) {
            	IEFProtein p2 = (IEFProtein) barProteins.elementAt(j);
                if (compare(p1, p2) == 0) {
                    p1.addProtein(p2.getProtein());
                    barProteins.remove(j);
                    j = --i;
                    // restart j loop to test with this one
                }
            }
        }
	}

}