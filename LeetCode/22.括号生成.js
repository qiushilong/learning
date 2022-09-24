/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	return lr(n, n).filter((item) => item.length === 2 * n); // 过滤得到长度为 2n 的 item
};

function lr(lNum, rNum) {
	if ((lNum === 0 && rNum === 0) || lNum > rNum) return [];
	if (lNum === 0) return [new Array(rNum + 1).join(")")]; // 生成 rNum 个 )，注意长度是 rNum + 1
	return [
		...lr(lNum - 1, rNum).map((item) => "(" + item),
		...lr(lNum, rNum - 1).map((item) => ")" + item),
	];
}

// @lc code=end
