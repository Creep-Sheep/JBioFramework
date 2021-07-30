package main.java.Utilities;

public class JSUtil {
	// If we made this next declaration final, then the Java compiler would just 
	// insert false everywhere isJS is found in the code. We need it to be dynamic.
	/*not final*/ public static boolean isJS = /** @j2sNative true || */false;
	
}