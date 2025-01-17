package main.java.Ionex;

import javax.swing.JTextField;
import java.awt.Event;

class AmountTextField extends JTextField {
    /**
	 * 
	 */
	private static final long serialVersionUID = 3905619255423613492L;
	String lastValue;

    public AmountTextField(String string) {
        super(string);
    }

    public boolean keyUp(Event evt, int key) {
        //if the field is now empty, it's OK
        String strText = getText().trim();
        if (strText.equals("")) {
            lastValue = getText();
            return true;
        }

        //see if the value is a valid integer
        try {
            int intValue = Integer.valueOf(getText().trim()).intValue();
            if ((intValue > 0) && (intValue <= 400)) {
                lastValue = getText();
            } else {
                setText(lastValue);
//					Toolkit.getDefaultToolkit().beep();
            }
        } catch (NumberFormatException e) {
            setText(lastValue);
//				Toolkit.getDefaultToolkit().beep();
        }

        return true;
    }
}