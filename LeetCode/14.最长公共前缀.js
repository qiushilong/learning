/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let last_index = 0;
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				return strs[0].slice(0, last_index);
			}
		}
		last_index = i + 1;
	}
	return strs[0].slice(0, last_index);
};

console.log(longestCommonPrefix(["dog","dacecar","dar"]));
// @lc code=end
