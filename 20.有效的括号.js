/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        switch (c) {
            case '(':
                stack.push(')')
                break
            case '{':
                stack.push('}')
                break
            case '[':
                stack.push(']')
                break
            default:
                // pop()方法从数组中删除最后一个元素，并返回该元素的值
                // console.log(c,stack.pop() }, c !== stack.pop());
                if (c !== stack.pop()) {
                    return false
                }
                break
        }
    }
    return stack.length === 0
}
// [{[ ]}]
// var isValid = function (s) {
//     const stack = []

//     for (let i = 0; i < s.length; i++) {
//         let c = s.charAt(i)
//         switch (c) {
//             case '(':
//                 stack.push(')')
//                 break
//             case '[':
//                 stack.push(']')
//                 break
//             case '{':
//                 stack.push('}')
//                 break
//             default:
//                 if (c !== stack.pop()) {
//                     return false
//                 }
//         }
//     }

//     return stack.length === 0
// }
// @lc code=end
