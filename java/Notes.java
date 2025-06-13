import java.util.*;
import java.lang.*;
import java.io.*;
class Notes {
    public static void main (String[] args){
        //number to string  
            int n = 512;
            String str = Integer.toString(n);
            String anotherStr = String.valueOf(n);
            System.out.println(anotherStr);
        //Reverse string , builtin string has no reverse
            String str1 = new StringBuilder(str).reverse().toString(); 
            //strigBuilder returns StringBuilder object thats why using .toString and the sotore in a String variable
            System.out.println(str1);

        // Convert to a char array
            char[] myArray = str.toCharArray();
        //num travarse every digit
            // int a = n % 10;   // 2
            // n= n / 10;        // 51
            // a = n % 10;       // 1
            // n= n / 10;        // 5
            // a = n % 10;       // 5
        //Squre root
            Math.sqrt(n);
        //n^(3)
            Math.pow(n,3);
        
    }
}