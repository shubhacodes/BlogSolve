---
title: "Leaf-Similar Trees"
subtitle: "Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence."
date: "2023-04-27"
month: "April"
topic: "Trees"
---

### Approach: Depth First Search
**Intuition and Algorithm**

Let's find the leaf value sequence for both given trees. Afterwards, we can compare them to see if they are equal or not.

To find the leaf value sequence of a tree, we use a depth first search. Our dfs function writes the node's value if it is a leaf, and then recursively explores each child. This is guaranteed to visit each leaf in left-to-right order, as left-children are fully explored before right-children.

```
class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> leaves1;
        vector<int> leaves2;
        dfs(root1, leaves1);
        dfs(root2, leaves2);

        return leaves1 == leaves2;
    }

    void dfs(TreeNode* node, vector<int>& leaves) {
        if (node == NULL) return;
        if (node->left == NULL && node->right == NULL)
            leaves.push_back(node->val);
        dfs(node->left, leaves);
        dfs(node->right, leaves);
    }
};
```

**Complexity Analysis**

- Time Complexity: O(T1+T2)O(T1 + T2)O(T1+T2), where T1 and T2 are the lengths of the given trees.

- Space Complexity: O(T1+T2) the space used in storing the leaf values.