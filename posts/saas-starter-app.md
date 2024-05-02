---
title: "Combination Sum"
subtitle: "The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different."
date: "2023-04-15"
month: "April"
topic: "Backtracking"
---

### Approach: Backtracking
**Intuition and Algorithm**

Specifically, to our problem, we could incrementally build the combination, and once we find the current combination is not valid, we backtrack and try another option.

```
class Solution {
public:
    void backtrack(const vector<int>& candidates, int target, vector<vector<int>>& res, vector<int>& current, int start, int total) {
        ios_base::sync_with_stdio(false);
        if (total == target) {
            res.push_back(current);
            return;
        }
        //Condition for controlled recursion
        if (start >= candidates.size() || total > target) return;
        //Include current element
        current.emplace_back(candidates[start]);
        backtrack(candidates, target, res, current, start, total + candidates[start]); 
        // Not include current element anymore, shift to the next element
        current.pop_back();
        backtrack(candidates, target, res, current, start + 1, total); 
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        ios_base::sync_with_stdio(false);
        vector<vector<int>> res;
        vector<int> current;
        backtrack(candidates, target, res, current, 0, 0);
        return res;
    }  
};
```

**Complexity Analysis**

- Time Complexity: O(N)

- Space Complexity: O(N)