package main.java.Utilities;

import java.awt.Component;
import java.awt.Point;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.Transferable;
import java.awt.datatransfer.UnsupportedFlavorException;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;

import javax.swing.JComponent;
import javax.swing.TransferHandler;

import javajs.async.AsyncFileChooser;
import javajs.util.Rdr;

/**
 * This class provides general file utilities, including:
 * 
 * an Asynchronous FileChooser,
 * 
 * a drag-and-drop (DnD) FileDropper, and
 * 
 * a method to get a file's contents as a string.
 * 
 * @author hansonr
 *
 */
public class FileUtils {

	public static swingjs.api.JSUtilI jsutil = (/** @j2sNative new swingjs.JSUtil() || */	null);

	
	public final static String directoryString = "." + File.separator +
	// ".." + File.separator +
			"data";

	public static String getStringForFile(File f) {
		byte[] bytes = null;
		if (jsutil == null) {
			try (FileInputStream fis = new FileInputStream(f)) {
				bytes = Rdr.getLimitedStreamBytes(fis, -1);
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			// In JavaScript we get the data directly from the File object
			bytes = jsutil.getBytes(f);
		}
		return (bytes == null ? "" : new String(bytes));
	}

	private static AsyncFileChooser chooser = null;

	public static AsyncFileChooser getFileChooser() {
		if (chooser != null)
			return chooser;
		// BH using the AsyncFileChooser for Java and JavaScript
		File dir = new File(directoryString);
		// System.out.println(dir.getAbsolutePath());
		if (!dir.isDirectory())
			dir = new File("." + File.separator + ".." + File.separator + "data");
		return chooser = new AsyncFileChooser(dir);
	}

	/**
	 * Open a file and do something with it.
	 * 
	 * @param frame
	 * @param ok function to run as ok(File)
	 */
	public static void openFile(Component frame, Function<File, Void> ok) {
		AsyncFileChooser chooser = FileUtils.getFileChooser();
		chooser.showOpenDialog(frame, () -> {
			ok.apply(chooser.getSelectedFile());
		}, null);
	}

	@SuppressWarnings("serial")
	public static class FileDropper extends TransferHandler {
		private BiFunction<File, Point, Void> func;
		private TransferHandler oldTransferHandler;
		
		public  FileDropper(JComponent c, BiFunction<File, Point, Void> function) {
			this.oldTransferHandler = c.getTransferHandler();
			this.func = function;
		}

		@Override
		public boolean canImport(TransferHandler.TransferSupport support) {
			return true;
		}

		@Override
		public boolean importData(TransferHandler.TransferSupport support) {
			Transferable tr = support.getTransferable();
			DataFlavor[] flavors = tr.getTransferDataFlavors();
			try {
				for (int i = 0; i < flavors.length; i++) {
					if (flavors[i].isFlavorJavaFileListType()) {
						@SuppressWarnings("unchecked")
						List<File> list = (List<File>) tr.getTransferData(flavors[i]);
						Point loc = support.getDropLocation().getDropPoint();
						// BH for now we just load one if multiple are picked
						for (int j = 0; j < Math.max(1, list.size()); j++) {
							func.apply(list.get(j), loc);
						}
						return true;
					}
				}
			} catch (UnsupportedFlavorException | IOException e) {
				e.printStackTrace();
			}
			return oldTransferHandler != null && oldTransferHandler.importData(support);
		}
	}

	/**
	 * Set the component c to respond with BiFunction f when a file is dropped.
	 * 
	 *  Could be set to optinally allow multiple file drop.
	 *  
	 * @param c
	 * @param f
	 */
	public static void setFileDropper(JComponent c, BiFunction<File, Point, Void> f) {
		c.setTransferHandler(new FileDropper(c, f));
	}


}