package recursion;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;

public class Backtracking {
    //print n to 1 using backtracking
    public void nToOne(int i,int n) {
        if(n < i){
            return;
        }
        nToOne(i+1,n);
        System.out.println(i);
    }

    public static void main(String[] args) {
        Backtracking sol = new Backtracking();
        int n = 4;
        int i =1;
        sol.nToOne(i,n);
    }
}
