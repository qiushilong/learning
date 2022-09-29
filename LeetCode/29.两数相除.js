/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	const MAX_VALUE = 2 ** 31 - 1,
		MIN_VALUE = -(2 ** 31);
	// 溢出情况
	if (dividend === MIN_VALUE && divisor === -1) {
		return MAX_VALUE;
	}

	const isNagtive =
		(dividend >= 0 && divisor < 0) || (dividend < 0 && divisor > 0); // 确定结果正负值

	const dividend = dividend >= 0 ? dividend : ~dividend + 1; // 被除数取负值
	const divisor = divisor < 0 ? divisor : ~divisor + 1; // 除数取正值

	let middle = (MAX_VALUE + MIN_VALUE) >> 1; // middle 取负值

	if (middle * divisor > dividend && (middle + 1) * divisor < dividend) {
	}
};

console.log(divide(7, -3));
// @lc code=end
