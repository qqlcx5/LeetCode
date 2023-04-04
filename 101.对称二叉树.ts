/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return false;
    const walk = (leftRoot:TreeNode | null, rightRoot:TreeNode | null)=>{
        if(!leftRoot && !rightRoot) return true
        if(leftRoot?.val !== rightRoot?.val) return false
        return walk(leftRoot.left, rightRoot.right) && walk(leftRoot.right, rightRoot.left)
    }
    return walk(root.left, root.right)
};
// @lc code=end

