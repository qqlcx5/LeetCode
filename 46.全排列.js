/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);
  function dfs(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        dfs(path);
        path.pop();
        used[i] = false;
      }
    }
  }
  dfs([]);
  return result;
}
// function permute(nums) {
//   const result = [];
//   const used = new Array(nums.length).fill(false);

//   function dfs(path) {
//     if (path.length === nums.length) {
//       result.push([...path]);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (!used[i]) {
//         used[i] = true;
//         path.push(nums[i]);
//         dfs(path);
//         path.pop();
//         used[i] = false;
//       }
//     }
//   }

//   dfs([]);
//   return result;
// }

// 该代码使用深度优先搜索（DFS）算法实现全排列。其中，result 数组用于存储所有排列结果，used 数组用于标记每个数字是否被使用过。

// 在每次搜索时，我们遍历所有未被使用的数字，并将其加入当前排列中。然后递归搜索下一个位置，完成后再将该数字从当前排列中删除，并将其设置为未使用状态，以便在后续搜索中使用。

// 以上代码中的优化包括：

// 使用 const 和 let 关键字声明变量，避免使用 var。
//   在函数定义前面使用了函数注释来说明该函数的作用和参数。
//   在递归搜索结束后，将当前排列的副本加入到 result 数组中，而不是直接将当前排列加入其中。这可以避免后续对 path 数组的修改影响已经加入 result 中的排列。
//   在每次搜索时，使用 path.push(nums[i]) 将数字加入到当前排列中，而不是使用 path.concat([nums[i]])。这样可以避免创建新数组，提高性能。
// 综上所述，以上代码实现了高效、简洁和易于理解的全排列算法。




// @lc code=end

