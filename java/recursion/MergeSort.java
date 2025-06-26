import java.util.*;

public class MergeSort {
    public static void merge(int arr[],int low,int mid,int high){
        List<Integer> temp = new ArrayList<Integer>();
        int left = low;
        int right = mid + 1;
        while(left <= mid && right <= high){
            if(arr[left] <= arr[right]){
                temp.add(arr[left]);
                left ++;
            }else{
                temp.add(arr[right]);
                right ++;
            }
        }
        while (left <= mid) {
            temp.add(arr[left]);
                left ++;
        }
        while (right <= high) {
            temp.add(arr[right]);
                right ++;
        }
        for(int i = low;i <= high;i++){
            arr[i] = temp.get(i-low);
        }
        return;
    }
    public static int[] Msort(int arr[],int low,int high){
        if(low >= high){
            return arr;
        }
        int mid = (low + high)/2;
        Msort(arr, low, mid);
        Msort(arr, mid+1, high);
        merge(arr,low,mid,high);
        return arr;
    } 
    public static void main(String[] args) {
        int arr[] = { 9, 4, 7, 6, 3, 1, 5 };
        int newarr [] = Msort(arr, 0, arr.length - 1);
        System.out.println("After sorting array: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(newarr[i] + " ");
        }
    }
}
