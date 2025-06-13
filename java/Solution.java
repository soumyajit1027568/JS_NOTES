import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;

public class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        int original = x, reversed = 0;
        while (x != 0) {
            int digit = x % 10;
            if (reversed > (Integer.MAX_VALUE - digit) / 10) return false; // overflow check
            reversed = reversed * 10 + digit;
            x /= 10;
        }
        return original == reversed;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int testNumber = 121;
        System.out.println(sol.isPalindrome(testNumber)); // Output: true
        Arrays.sort(args);
        Collections.sort(null);
    }
}
