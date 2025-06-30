import java.util.*;
public class combinationSumI {
 public void combinationSumF(List<List<Integer>> combinationArr, List<Integer> temp, int[] arr, int low, int target) {
        if (target == 0) {
            combinationArr.add(new ArrayList<>(temp)); // Add a copy of temp
            return;
        }
        if (target < 0 || low >= arr.length) {
            return;
        }
        // Include arr[low]
        temp.add(arr[low]);
        combinationSumF(combinationArr, temp, arr, low, target - arr[low]);
        temp.remove(temp.size() - 1); // Backtrack

        // Exclude arr[low] and move to next
        combinationSumF(combinationArr, temp, arr, low + 1, target);
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> combinationArr = new ArrayList<>();
        combinationSumF(combinationArr, new ArrayList<>(), candidates, 0, target);
        return combinationArr;
    }

    public static void main(String[] args) {
        combinationSumI sol = new combinationSumI();
        int arr[] = {1,4,2,3,2};
        List<Integer> ArrList = new ArrayList<Integer>();
        List<Integer> eArrList = new ArrayList<Integer>();
        ArrList.add(1);
        ArrList.add(3);
        ArrList.add(2);
        System.err.println(sol.combinationSum(arr,4));
    }
}
