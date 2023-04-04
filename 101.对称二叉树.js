/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSymmetric(root) {
    if (!root) return
    const walk = (leftRoot, rightRoot) => {
        if (!leftRoot && !rightRoot) return true
        if ([leftRoot, rightRoot].some(v => v === null)) return false
        if (leftRoot.val !== rightRoot.val) return false
        return walk(leftRoot.left, rightRoot.right) && walk(leftRoot.right, rightRoot.left)
    }
    return walk(root.left, root.right)
}

// @lc code=end
