/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle.length === 0) return 0;

	// haystack
	for (let i = 0; i <= haystack.length-needle.length; i++) {
		// needle
		for (let j = 0; j < needle.length; j++) {
			if (haystack[i + j] !== needle[j]) {
				break;
			}

			if (j === needle.length - 1) {
				return i;
			}
		}
	}
	return -1;
};

// console.log(strStr("leetcode", "dae"));

// @lc code=end
