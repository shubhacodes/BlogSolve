---
title: "Palindromic Substring"
subtitle: "Given a string s, return the longest palindromic substring in s."
date: "2023-12-22"
month: "December"
topic: "Two Pointers"
---

### Approach: Two pointer
**Intuition and Algorithm**

We initialize two pointers: one at the start of the string and another at the end of it. We check if the characters at the pointers are equal - if they aren't, we know the string cannot be a palindrome. If they are equal, we move to the next pair of characters by moving the pointers toward each other. We continue until we either find a mismatch or the pointers meet. If the pointers meet, then we have checked all pairs and we know the string is a palindrome.

```
class Solution {
public:
    // Expand around center, extend as far as possible, store max length
    void middleOut(string s, int i, int j, int& maxStart, int& maxLength) {
        while (i >= 0 && j <= s.size() - 1 && s[i] == s[j]) {
            i--;
            j++;
        }
        if (j - i - 1 > maxLength) {
            maxStart = i + 1;
            maxLength = j - i - 1;
        }
    }
    string longestPalindrome(string s) {
        ios_base::sync_with_stdio(false);
        int maxStart = 0;
        int maxLength = 1;
        for (int i = 0; i < s.size() - 1; i++) {
            middleOut(s, i, i, maxStart, maxLength); //for odd substr
            middleOut(s, i, i + 1, maxStart, maxLength); //for even substr
        }
        return s.substr(maxStart, maxLength);
    }
};
```

**Complexity Analysis**

- Time Complexity: O(N)

- Space Complexity: O(N)