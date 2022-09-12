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
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		const last = stack[stack.length - 1];
		switch (s[i]) {
			case ")":
				last === "(" ? stack.pop() : stack.push(s[i]);
				break;
			case "}":
				last === "{" ? stack.pop() : stack.push(s[i]);
				break;
			case "]":
				last === "[" ? stack.pop() : stack.push(s[i]);
				break;
      default:
        stack.push(s[i]);
		}
	}
  return !stack.length
};

// @lc code=end
