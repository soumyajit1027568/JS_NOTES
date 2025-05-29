import java.util.*;
import java.lang.*;
import java.io.*;
class Notes {
    public static void main (String[] args){
        //number to string  
            int n = 512;
            String str = Integer.toString(n);

        //Reverse string , builtin string has no reverse
            String str1 = new StringBuilder(str).reverse().toString(); 
            //strigBuilder returns StringBuilder object thats why using .toString and the sotore in a String variable
            System.out.println(str1);

        // Convert to a char array
            char[] myArray = str.toCharArray();
    }
}