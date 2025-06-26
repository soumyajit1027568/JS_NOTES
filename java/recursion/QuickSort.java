import java.util.*;

public class QuickSort {
    public static int pivotIndex(int arr[],int low,int high){
        int p = arr[low];
        int i = low;
        int j = high;
        while(i<j){
            while(arr[i] <= p && i < high){
                i++;
            }
            while (arr[j] > p && j > low) {
                j--;
            }
            if(i < j){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
            int temp = arr[j];
            arr[j] = p;
            arr[low] = temp;
        return j;
    }

    public static int[] Qsort(int arr[],int low,int high){
        if(low < high){
        int pivot = pivotIndex(arr,low, high) ;
        Qsort(arr, low, pivot-1);
        Qsort(arr, pivot+1, high);
        }
        return arr;
    }
    public static void main(String[] args) {
        int arr[] = { 1,9, 4, 7, 6, 3,3, 2, 5 };
        int newarr [] = Qsort(arr, 0, arr.length - 1);
        System.out.println("After sorting array: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(newarr[i] + " ");
        }
    }
}
