/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
// var simplifyPath = function (path) {
//   let used = path.split('/').filter(Boolean);
//   let stack = [];

//   for (let i = 0; i < used.length; i++) {
//     if (used[i] === '.') { } else if (used[i] === '..') {
//       stack.pop();
//     } else {
//       stack.push(`/${used[i]}`);
//     }
//   }
//   return stack.join('') || '/';
// };

// 1. 使用split和reduce函数：
// ```
// const simplifyPath = (path) => {
//   const stack = [];
//   path.split("/").reduce((prev, curr) => {
//     if (curr === "" || curr === ".") {
//       return prev;
//     } else if (curr === "..") {
//       if (stack.length !== 0) stack.pop();
//     } else {
//       stack.push(curr);
//     }
//     return prev;
//   }, 0);
//   return "/" + stack.join("/");
// };
// ```;


// 3. 使用正则表达式：
// const simplifyPath = (path) => {
//   const pattern = /\/(\w+|\.\.|\.)/g;
//   const stack = [];
//   path.match(pattern).forEach((match) => {
//     const dir = match.slice(1);
//     console.log(dir, 'sss');
//     if (dir === "..") stack.pop();
//     else if (dir !== ".") stack.push(dir);
//   });

//   return "/" + stack.join("/");
// };

// 4. 使用字符串操作：

// ```
// const simplifyPath = (path) => {
//   const stack = [];
//   let curDir = "";
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] === "/") {
//       if (curDir === "..") stack.pop();
//       else if (curDir !== "" && curDir !== ".") stack.push(curDir);
//       curDir = "";
//     } else {
//       curDir += path[i];
//     }
//   }
//   if (curDir === "..") stack.pop();
//   else if (curDir !== "" && curDir !== ".") stack.push(curDir);
//   return "/" + stack.join("/");
// };
// ```;

// 5. 使用双端队列：
var simplifyPath = function (path) {
  const stack = [];
  path.split("/").forEach(dir => {
    if (dir === '..') {
      stack.pop();
    } else if (dir !== '.' && dir !== '') {
      stack.push(dir);
    }
  });
  return '/' + stack.join('/');
};

// @lc code=end

