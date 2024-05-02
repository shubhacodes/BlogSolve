---
title: "Group Anagrams"
subtitle: "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."
date: "2023-03-19"
month: "March"
topic: "Hashing"
---

### Approach: Depth First Search
**Intuition and Algorithm**

Two strings are anagrams if and only if their sorted strings are equal.

Maintain a map ans: {String -> List} where each key K\text{K}K is a sorted string, and each value is the list of strings from the initial input that when sorted, are equal to K\text{K}K.

In Java, we will store the key as a string, eg. code. In Python, we will store the key as a hashable tuple, eg. ('c', 'o', 'd', 'e').

```
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        ios_base::sync_with_stdio(false);
        unordered_map<string, vector<string>> groups;
        for (string& s: strs) {
            string t = s;
            sort(t.begin(), t.end());
            groups[t].push_back(s);
        }
        vector<vector<string>> ans;
        for (auto [key, val]: groups) {
            ans.push_back(val);
        }
        return ans;
    }
};
```

**Complexity Analysis**

- Time Complexity: O(N K log K)

- Space Complexity: O(N)