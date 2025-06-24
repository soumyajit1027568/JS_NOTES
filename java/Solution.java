import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;

public class Solution {
    //for only print
    public void sum(int num,int multiply) {
        if(num == 1){
            System.out.println(multiply);
            return;
        }
        sum(num-1, multiply*num);
    }
    
    //if want some return value
    public int returnSum(int n){
        if(n == 0){
            return 1;
        }
        return n * returnSum(n-1);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int testNumber = 4;
        sol.sum(testNumber,1);
        System.out.println(sol.returnSum(4));
    }
}
