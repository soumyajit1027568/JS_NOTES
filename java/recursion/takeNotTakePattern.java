import java.util.*;
public class TakeNotTakePattern {
   
    // print all subsets of an array 
    public void f(int i,List<Integer> arr,List<Integer> eArr){
        if(i >= arr.size()){
             System.out.println(eArr);
            return;
        }
        //take -> arr.get(i)
        eArr.add(arr.get(i));
        f(i+1,arr,eArr);
        //not take -> arr.get(i) or skip that element
        eArr.remove(arr.get(i));
        f(i+1,arr,eArr);
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

    //print the subsequence with sum =3
    public void subsequenceWithSum(int i,List<Integer> arr,List<Integer> emptyArray,int sum){
        if(i >= arr.size()){
            if(sum == 3){
            System.out.println(emptyArray);
            }
            return;
        }
        emptyArray.add(arr.get(i));
        subsequenceWithSum(i+1, arr, emptyArray,sum+arr.get(i));
        emptyArray.remove(arr.get(i));
        subsequenceWithSum(i+1, arr, emptyArray, sum);
    }

    //print any subsequence when sum = 3 ,  stop unnecessary func call if found one 
    public boolean anySubsequenceWithSum(int i,List<Integer> arr,List<Integer> emptyArray,int sum){
        if(i >= arr.size()){
            if(sum == 3) {
                System.err.println(emptyArray);
                return true;
            }
            return false;
        }
        emptyArray.add(arr.get(i));
        if(anySubsequenceWithSum(i+1, arr, emptyArray, sum + arr.get(i))){
            return true;
        }
        emptyArray.remove(i);
        if(anySubsequenceWithSum(i+1, arr, emptyArray, sum)){
            return true;
        }
        return false;
    }

    //count the subsequence with sum =3
    public int countOfSubsequenceWithSum(int i,List<Integer> arr,int sum){
        if(i >= arr.size()){
            if(sum == 3){
                return 1;
            }
            return 0;
        }
        int l =  countOfSubsequenceWithSum(i+1, arr, sum + arr.get(i));
        int r = countOfSubsequenceWithSum(i+1, arr, sum);
        return l+r;
    }
    // subsequence when sum = sum
    //print -> send sum in parameter and update
    //print any ane subsequence -> return true or false and avoide further recursion call if get true
    //count -> if basecase satisfied  return 1 otherwise return 0 and add all f() and return 
    public static void main(String[] args) {
        TakeNotTakePattern sol = new TakeNotTakePattern();
        // int arr[] = {1,2,3};
        List<Integer> ArrList = new ArrayList<Integer>();
        List<Integer> eArrList = new ArrayList<Integer>();
        ArrList.add(1);
        ArrList.add(2);
        ArrList.add(5);
        sol.f(0,ArrList,eArrList);
        System.err.println("-------------------");
        sol.subsequenceWithSum(0,ArrList,eArrList,0);
        System.err.println("-------------------");
        sol.anySubsequenceWithSum(0,ArrList,eArrList,0);
        System.err.println("-------------------");
        System.err.println(sol.countOfSubsequenceWithSum(0,ArrList,0));
        
    }
}

