---
title: "Longest Palindromic Substring"
subtitle: "Given a string s, return the longest palindromic substring in s."
date: "2023-05-15"
month: "May"
topic: "Dynamic Programming"
---

### Approach: Dynamic Programming
**Intuition and Algorithm**

Let's say that we knew the substring with inclusive bounds i, j was a palindrome. If s[i - 1] == s[j + 1], then we know the substring with inclusive bounds i - 1, j + 1 must also be a palindrome, and this check can be done in constant time.

We can flip the direction of this logic as well - if s[i] == s[j] and the substring i - 1, j + 1 is a palindrome, then the substring i, j must also be a palindrome.

1. Initialize n = s.length and a boolean table dp with size n * n, and all values to false.

2. Initialize ans = [0, 0]. This will hold the inclusive bounds of the answer.

3. Set all dp[i][i] = true.

4. Iterate over all pairs i, i + 1. For each one, if s[i] == s[i + 1], then set dp[i][i + 1] = true and update ans = [i, i + 1]. Now, we populate the dp table. Iterate over diff from 2 until n. This variable represents the difference j - i.

5. In a nested for loop, iterate over i from 0 until n - diff.

Set j = i + diff.
Check the condition: if s[i] == s[j] && dp[i + 1][j - 1], we found a palindrome.
In that case, set dp[i][j] = true and ans = [i, j]
Retrieve the answer bounds from ans as i, j. Return the substring of s starting at index i and ending with index j.

```
class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        vector<vector<bool>> dp(n, vector<bool>(n));
        array<int, 2> ans = {0, 0};

        for (int i = 0; i < n; ++i) {
            dp[i][i] = true;
        }

        for (int i = 0; i < n - 1; ++i) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                ans = {i, i + 1};
            }
        }

        for (int diff = 2; diff < n; ++diff) {
            for (int i = 0; i < n - diff; ++i) {
                int j = i + diff;
                if (s[i] == s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    ans = {i, j};
                }
            }
        }

        int i = ans[0];
        int j = ans[1];
        return s.substr(i, j - i + 1);
    }
};
```

**Complexity Analysis**

- Time Complexity: O(n^2)

- Space Complexity: O(n^2)