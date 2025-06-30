import java.util.*;
public class Recursion {
    //sum of n number for only print
    public void sum(int num,int multiply) {
        if(num == 1){
            System.out.println(multiply);
            return;
        }
        sum(num-1, multiply*num);
    }
    
    //sum of n number if want some return value from function
    public int returnSum(int n){
        if(n == 0){
            return 1;
        }
        return n * returnSum(n-1);
    }
    
    // reverse array using recursion
    public void  reverse(int i,int n,List<Integer> arr){
        if (i >= n/2) {
            return;
        }
        Collections.swap(arr,i,n-i-1);
        reverse(i+1,n,arr);
    }
    
    //check palindrome
    public boolean palindrome(int i,int n,String str){
        if(i >= n/2) return true;
        if(str.charAt(i) != str.charAt(n-i-1)){
            return false;
        }
        return palindrome(i+1, n, str);
    }

    //Nth fibonacci number
    public int nThFibonacci(int n) {
        if(n <= 1){
            return n;  
        }
        return nThFibonacci(n-1) + nThFibonacci(n-2);
    }

     public static void main(String[] var0) {
        List<Integer> ArrList = new ArrayList<Integer>();
        ArrList.add(10);
        ArrList.add(15);
        ArrList.add(20);
        ArrList.add(25);
        Recursion obj = new Recursion();

        obj.reverse(0, ArrList.size(),ArrList);
        System.out.println(ArrList);

        String s = "assasa";
        System.out.println(obj.palindrome(0,s.length(),s));

        System.out.println(obj.nThFibonacci(10));
   }
}
