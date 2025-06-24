import java.util.*;
public class Recursion {
    
    public void  reverse(int i,int n,List<Integer> arr){
        if (i >= n/2) {
            return;
        }
        Collections.swap(arr,i,n-i-1);
        reverse(i+1,n,arr);
    }
    public void  reverse2(int i,int n,int arr[]){
        if (i >= n/2) {
            return;
        }
        int temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
        reverse2(i+1,n,arr);
    }
    public boolean pelendrome(int i,int n,String str){
        if(i >= n/2) return true;
        if(str.charAt(i) != str.charAt(n-i-1)){
            return false;
        }
        return pelendrome(i+1, n, str);
    }
     public static void main(String[] var0) {
        int arr[] = {1,3,3,4,2}; 
        List<Integer> ArrList = new ArrayList<Integer>();
        ArrList.add(10);
        ArrList.add(15);
        ArrList.add(20);
        ArrList.add(25);
      Recursion obj = new Recursion();
      obj.reverse(0, ArrList.size(),ArrList);
      System.out.println(ArrList);
      String s = "assasa";
      System.out.println(obj.pelendrome(0,s.length(),s));
      obj.reverse2(0, arr.length,arr);
      for(int i=0;i<arr.length;i++){
      System.out.println(arr[i]);
      }

   }
}
