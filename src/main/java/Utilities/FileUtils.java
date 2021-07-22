package main.java.Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javajs.util.Rdr;

public class FileUtils {

	public static swingjs.api.JSUtilI jsutil = (/** @j2sNative new swingjs.JSUtil() || */	null);

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
	
}