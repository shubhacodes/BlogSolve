---
title: "Super Egg Drop"
subtitle: "Return the minimum number of moves that you need to determine with certainty what the value of f is."
date: "2023-01-27"
month: "January"
topic: "Binary Search"
---

### Approach:  Dynamic Programming with Binary Search
**Intuition and Algorithm**

It's natural to attempt dynamic programming, as we encounter similar subproblems. Our state is (K,N)(K, N)(K,N): KKK eggs and NNN floors left. When we drop an egg from floor XXX, it either survives and we have state (K,N−X)(K, N-X)(K,N−X), or it breaks and we have state (K−1,X−1)(K-1, X-1) (K−1,X−1).

This approach would lead to a O(KN2)O(K N^2)O(KN^2) algorithm, but this is not efficient enough for the given constraints. However, we can try to speed it up. Let dp(K,N)dp(K, N)dp(K,N) be the maximum number of moves needed to solve the problem in state (K,N)(K, N)(K,N). 

```
class Solution {
public:
    //Time: O(n*k*logn), Space: O(n*k)
    int t[101][10001];
    int helper(int k, int n){
        if(n == 0 || n == 1|| k==1) return n;
        if(t[k][n] != -1) return t[k][n];
        int mn = INT_MAX; 
        int low = 0;
        int high = n;
        int temp = 0;
        while(low<=high){
            int mid = (low + high)/2;
            int left = helper(k-1, mid-1);
            int right = helper(k, n-mid);
            temp = 1 + max(left, right);
            if(left < right) low = mid+1; //since max temp value in worst case, so need to go above
            else high = mid-1;     //move to the downward
            mn = min(mn, temp); 
        }
        return t[k][n] = mn;
    }
    
    int superEggDrop(int k, int n) {
        memset(t,-1,sizeof(t));
        return helper(k, n);
    }
};
```

**Complexity Analysis**

- Time Complexity: O(K N log N)

- Space Complexity: O(K N) 