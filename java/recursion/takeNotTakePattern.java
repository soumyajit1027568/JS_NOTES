package recursion;

import java.util.*;
public class takeNotTakePattern {
   
    // print all subsets of an array 
    public void f(int i,List<Integer> arr,List<Integer> eArr){
        if(i >= arr.size()){
            // print all subsets of an array where the sum of elements in the subset is equal to 3
            int sum = 0;
            for (int j =0;j<eArr.size();j++) {
                sum = sum + eArr.get(j);
            }
            if(sum == 3){  // if we want to print all subsets, we can just remove this if condition and the above for loop
                System.out.println(eArr);
            }
            
            return;
        }
        //take -> arr.get(i)
        eArr.add(arr.get(i));
        f(i+1,arr,eArr);
        //not take -> arr.get(i) or skip that element
        eArr.remove(arr.get(i));
        f(i+1,arr,eArr);
    }
    public static void main(String[] args) {
        takeNotTakePattern sol = new takeNotTakePattern();
        // int arr[] = {1,2,3};
        List<Integer> ArrList = new ArrayList<Integer>();
        List<Integer> eArrList = new ArrayList<Integer>();
        ArrList.add(1);
        ArrList.add(3);
        ArrList.add(2);
        sol.f(0,ArrList,eArrList);
    }
}

//                        index:0 empty[]
//                     /              \
//                take                not-take
//                  /                     \
//      index:1 [empty[0] : 1]                    index:1 []
//          /      \                      /       \
// take        not-take          take         not-take
//    /              \                /               \
// i:2 [1,2]      i:2 [1]       i:2 [2]         i:2 []
//   /    \         /   \         /   \            /    \
// [1,2,3][1,2] [1,3] [1]  [2,3] [2]       [3]    []
 
//   (i:3)      (i:3)  (i:3)(i:3)  (i:3)(i:3)    (i:3)(i:3)