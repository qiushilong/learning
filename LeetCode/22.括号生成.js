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
	return lr(n,n).filter(item=>item.length!==n)
};

function lr(lNum, rNum) {
	if (lNum === 0) {
		const result = [];
		for (let i = 0; i < rNum; i++) {
			result.push(")");
		}
		return [result.join("")];
	}
	if ((lNum === 0 && rNum === 0) || lNum > rNum) return [];
	return [
		...lr(lNum - 1, rNum).map((item) => "(" + item),
		...lr(lNum, rNum - 1).map((item) => ")" + item),
	];
}

// console.log(generateParenthesis(4));

// @lc code=end
