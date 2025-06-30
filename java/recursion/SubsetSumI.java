import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;

public class SubsetSumI {
    public List<Integer> SubsetSumIF(int arr[],int low,List<Integer> result,int sum) {
        if(low == arr.length){
            int sumref = sum;
            result.add(sumref);
            return result;
        }

        SubsetSumIF(arr,low+1,result,sum + arr[low]);
        SubsetSumIF(arr,low+1,result,sum);
        return result;
    }
    public static void main(String[] var0) {
    SubsetSumI var1 = new SubsetSumI();

    int arr [] = {5,2,1};
    ArrayList<Integer> result = new ArrayList<Integer>();

    var1.SubsetSumIF(arr,0,result, 0);
    //sort the result
    Collections.sort(result);
    //print the result
    System.out.println(result);
   }
}
