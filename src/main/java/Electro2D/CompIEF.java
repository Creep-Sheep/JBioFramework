package main.java.Electro2D; /**
 * This class compares two IEFProteins based on pI representation and
 * x values.
 *
 * @author Jill Zapoticznyj
 */

import java.util.BitSet;
import java.util.Comparator;
import java.util.Vector;

public class CompIEF implements Comparator<IEFProtein> {

    private final double maxPH;  //the maximum pH value for the IEF
    private final double minPH;  //the minimum pH value for the IEF
    private final double oneOverRange;
	private double pHPerPixel;

    /**
     * Constructor for the Electro2D.CompIEF object
     *
     * @param pHmax the max value
     * @param pHmin the min value
     */
    public CompIEF(double maxPH, double minPH) {
        this.maxPH = maxPH;
        this.minPH = minPH;
        // BH really, this is a density
        // 0-10 pH gives 0.1 "fractionalWidth per pH"
        // 3-8  pH gives 0.2 "fractionalWidth per pH"
        oneOverRange = 1 / (maxPH - minPH);
        pHPerPixel = (maxPH - minPH) / IEFProtein.pixelWidth;
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
        int x1 = i1.returnX();
        int x2 = i2.returnX();
        if (x1 == x2)
        	return 0;
        // 3/4 of the width of an Electro2D.IEFProtein bar
    	// dividing the full width by 100, so around 5-6 pixels per bar
    	// and 3-4 pixels for the purposes here
        double w34 = IEFProtein.returnWidth34();
        double pHPerBar34 = IEFProtein.returnWidth() * pHPerPixel;
        // the range each Electro2D.IEFProtein represents
        // get the objects' pI values and x coordinates
        // 
        double minpi1 = i1.getMinPI();
        double minpi2 = i2.getMinPI();
        double maxpi1 = i1.getMaxPI();
        double maxpi2 = i2.getMaxPI();


        // if the pI values are both greater than the max value for the range,
        // they are equal
        // if the pI values are both less than the min value for the range,
        // they are equal
        if (minpi1 >= maxPH && minpi2 >= maxPH
        		|| maxpi1 <= minPH && maxpi2 <= minPH) {
            return 0;
        }
        //if the x coordinates are within 1/2 the width of a bar of each other..
        //..and the pI values are within range of each other, they are equal
        //pixels....6.......9
        //i1.....|----x----|
        //............|--w34--|
        //i2.............|----x----|
        
        //
        
        if (Math.abs(x2 - x1) <= w34
        		&& (minpi2 - minpi1 >= 0 && minpi2 - minpi1 <= oneOverRange 
            		|| maxpi1 - maxpi2 >= 0 && maxpi1 - maxpi2 <= oneOverRange)) {
                return 0;
        }

//        // BH I just don't think the above makes sense. 
//        // first of all, the measure is 3/4 not 1/2
//        // why only checking for x2 > x1?
//        // And why is "range" 1/(maxPH-minPH) being compared to delta_pH

//        if (Math.abs(x2 - x1) <= w34
//        		&& (minpi2 >= minpi1 && minpi2 <= maxpi1//- minpi1 <= oneOverRange 
//            		|| maxpi2 <= maxpi1 && maxpi2 >= minpi1// - maxpi2 <= oneOverRange
//            		)) {
//                return 0;
//        }

        // if the x coordinate of the first Electro2D.IEFProtein is greater than that of
        // the second, the first Electro2D.IEFProtein is greater.
        //else, the second was greater and retVal still equals -1.
        return (x1 > x2 ? 1 : -1);
    }

    /**
     * This nested for loop will do a sort of collapsing exercise; every
     * protein in the barProtein vector will be evaluated against every other protein, and if they're the same they'll
     * be collapsed into the same element.
     *
     * The for loops start out with their iterators at -1 the length of
     * barProteins so that they can access their elements in order correctly
     */
	public Vector<IEFProtein> sortBarProteins(Vector<IEFProtein> barProteins) {
		// presort list
    	barProteins.sort(new XComp());
//        for (int i = 0, n = barProteins.size(); i < n; i++) {
//        	barProteins.get(i).index = i;
//        	System.out.println("bar " + i + " " + barProteins.get(i));        	
//        }
        int n = barProteins.size();
        if (n == 0)
        	return barProteins;
        BitSet bs = new BitSet();
        bs.set(0, n);
    	IEFProtein p1 = (IEFProtein) barProteins.elementAt(0);
        for (int i = 1; i < n; i++) {
        	IEFProtein p2 = (IEFProtein) barProteins.elementAt(i);
        	if (p2.returnX() == p1.returnX()) {
        		bs.clear(i);
        		p1.addProtein(p2.getProtein());
        	} else {
        		p1 = p2;
        	}
        }
        for (int i = 0; i >= 0; i = bs.nextSetBit(i + 1)) {
        	p1 = barProteins.elementAt(i);
//        	System.out.println("bar  " + i + " " + p1);
            for (int j = bs.nextSetBit(i + 1); j >= 0; j = bs.nextSetBit(j + 1)) {
            	if (!bs.get(j))
            		continue;
            	IEFProtein p2 = barProteins.elementAt(j);
                if (compare(p1, p2) == 0) {
                    p1.addProtein(p2.getProtein());
                    bs.clear(j);
//                	System.out.println("add " + j + p2 + " to " + i + p1);
                }
            }
        }

        Vector<IEFProtein> bp = new Vector<>(bs.cardinality());
        for (int i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i + 1)) {
//        	System.out.println("bar " + i + " " + barProteins.get(i));
        	bp.add(barProteins.get(i));
        }
//        System.out.println(bp.size());
        return bp;
	}

	class XComp implements Comparator<IEFProtein> {

		@Override
		public int compare(IEFProtein o1, IEFProtein o2) {
			return (o1.returnX() > o2.returnX() ? 1 : o1.returnX() < o2.returnX() ? -1 : 0);
		}
		
	}
}