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
	if (divisor === 1) {
		return dividend;
	}
	if (divisor === -1) {
		return dividend === MIN_VALUE ? MAX_VALUE : ~dividend + 1;
	}

	const isNagtive =
		(dividend >= 0 && divisor < 0) || (dividend <= 0 && divisor > 0); // 确定结果正负值

	dividend = dividend <= 0 ? dividend : ~dividend + 1; // 被除数取负值
	divisor = divisor > 0 ? divisor : ~divisor + 1; // 除数取正值

	let l = MIN_VALUE;
	let r = 0;

	while (true) {
		let middle = l === -1 && r === 0 ? 0 : (l - r) >> 1;
		if (middle * divisor >= dividend && (middle - 1) * divisor < dividend) {
			return isNagtive ? middle : ~middle + 1;
		}
		(middle - 1) * divisor > dividend ? (r = middle) : (l = middle);
	}
};

console.log(divide(7100, 35));
// @lc code=end
