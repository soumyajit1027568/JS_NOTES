import java.util.*;
public class CombinationSumII {
    public static List<List<Integer>> combinationSumII(int low,int target,int[] candidates, List<List<Integer>> result,List<Integer> temp){
        if(target == 0){
            result.add(new ArrayList<Integer>(temp));
            return result;
        }
        if(low > candidates.length -1){
            return result;
        }
        for(int i = low;i<candidates.length;i++){
            if(i > low && candidates[i] == candidates[i-1]) continue;
            if(candidates[i] > target ) break;
            temp.add(candidates[i]);
            combinationSumII(i+1,target-candidates[i],candidates,result,temp);
            temp.remove(temp.size() - 1);
        }
        return result;
    }
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> temp = new ArrayList<Integer>();
        Arrays.sort(candidates);
        return combinationSumII(0,target,candidates,result,temp);
    }

    public static void main(String[] args) {
        CombinationSumII sol = new CombinationSumII();
        int arr[] = {1,4,2,3,2,2,4};
        List<Integer> ArrList = new ArrayList<Integer>();
        List<Integer> eArrList = new ArrayList<Integer>();
        ArrList.add(1);
        ArrList.add(3);
        ArrList.add(2);
        System.err.println(sol.combinationSum2(arr,4));
    }
}
